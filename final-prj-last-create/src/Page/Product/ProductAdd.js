import { MDBModalFooter } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import "./StyleProduct.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

const MySwal = withReactContent(Swal);
function ProductAdd(props) {
  const [input, setInput] = useState([]);
  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const [ptype, setPtype] = useState([]);
  const [pstatus, setPstatus] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3333/show-product-type").then((res) => {
      setPtype(res.data);
      // console.log(res.data);
    });

    axios.get("http://localhost:3333/show-pstatus").then((res) => {
      setPstatus(res.data);
    });
  }, []);
  const Submit = (e) => {
    alert(JSON.stringify(e)+"input"+input.ptype_id+input.pstatus_id+input.sub_aid+input.buydate);

    // axios
    //   .post("http://localhost:3333/product-added", {
    //     // pid: input.pid,
    //     // pname: input.pname,
    //     // pdetail: input.pdetail,
    //     // qty: 1,
    //     // unit: input.unit,
    //     // price: input.price,
    //     // finance: input.finance,
    //     // acquirement: input.get,
    //     // ptype_id: input.ptype_id,
    //     // seller: input.seller,
    //     // sub_aid: input.sub_aid,
    //     // pstatus_id: input.pstatus_id,
    //     // buydate: input.buydate,
    //     // pickdate: input.pickdate,
    //     // fisicalyear: input.fisicalyear,
    //   })
    //   .then((res) => {
    //     // console.log(res.data.status);
    //     if (res.data.status === "error") {
    //       MySwal.fire({
    //         title: <strong>ไม่สามารถบันทึกได้</strong>,
    //         html: `${res.data.message.sqlMessage}`,
    //         icon: "error",
    //       });
    //     } else if (res.data.status != "error") {
    //       let timerInterval;
    //       MySwal.fire({
    //         title: "ปิดเมื่อบันทึกเสร็จสิ้น",
    //         html: "I will close in <b></b> milliseconds.",
    //         timer: 900,
    //         icon: "success",
    //         timerProgressBar: true,
    //         didOpen: () => {
    //           MySwal.showLoading();
    //           const b = MySwal.getHtmlContainer().querySelector("b");
    //           timerInterval = setInterval(() => {
    //             b.textContent = MySwal.getTimerLeft();
    //           }, 1200);
    //         },
    //         willClose: () => {
    //           clearInterval(timerInterval);
    //         },
    //       })
    //         .then((result) => {
    //           /* Read more about handling dismissals below */

    //           if (result.dismiss === Swal.DismissReason.timer) {
    //             const url = "http://localhost:3333/upload";
    //             const formData = new FormData();

    //             formData.append("photo", file, +typename);
    //             // console.log(file);
    //             axios.post(url, formData).then((response) => {});
    //             // console.log("I was closed by the timer");
    //           }
    //         })
    //         .then((value) => {
    //           setTimeout(() => {
    //             props.toggleShow();
    //             // window.location.reload();
    //             // setInput([]);
    //           }, 100);
    //         });
    //     }
    //   });
  };
  const Cancel = () => {
    // props.toggleShow();
    setInput([]);
    reset();
  };
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [file, setFile] = useState();
  const [typename, setTypeName] = useState("");
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);
  const onImageChange = (e) => {
    setImages([...e.target.files]);
    setFile(e.target.files[0]);
    // console.log("." + e.target.files[0].type.split("image/")[1]);
    setTypeName("." + e.target.files[0].type.split("image/")[1]);
  };
  const mid = localStorage.getItem("main_aid");
  const [subagen, setSubAgen] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:3333/show-sub-agen-where-main", {
        main_aid: mid,
      })
      .then((res) => {
        setSubAgen(res.data);
        // console.log(res.data);
      });
  }, []);
  const [serror, setSerror] = useState({
    ptype_id: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <div>
      <div className="container">
        <form
          className="row justify-content-center"
          onSubmit={handleSubmit(Submit)}
        >
          <div className="col-12 col-sm-6 mt-3 ">
            <TextField
              fullWidth
              id="outlined-basic"
              label="หมายเลขครุภัณฑ์"
              variant="outlined"
              type="text"
              {...register("pid", {
                pattern: {
                  value: /\w{6}-\d{2}\.\d{2}-\d{4}/,
                  // value:/[a-zA-Z0-9\-]{3}/,
                  message: "ไม่ถูกต้อง",
                },
                maxLength: {
                  value: 17,
                  message: "ไม่เกิน 17 ตัวอักษร", // JS only: <p>error message</p> TS only support string
                },
                minLength: {
                  value: 17,
                  message: "กรุณากรอกหมายเลขครุภัณฑ์ให้ครบถ้วน",
                },
                required: true,
              })}
              error={!!errors?.pid}
              helperText={errors?.pid ? errors.pid.message : null}
            />
          </div>
          <div className="col-12 col-sm-6 mt-3">
            <TextField
              {...register("pname", {
                required: "กรุณากรอกชื่อรายการ",
              })}
              fullWidth
              id="outlined-basic"
              label="รายการ"
              variant="outlined"
              type="text"
              error={!!errors?.pname}
              helperText={errors?.pname ? errors.pname.message : null}
            />
          </div>
          <div className="col-12 col-sm-6 mt-3">
            <TextField
              select
              fullWidth
              label="ประเภทครุภัณฑ์"
              defaultValue="1"
              value={input.ptype_id || ""}
              name="ptype_id"
              onChange={onInputChange}
              required
            >
              {ptype.map((d, i) => (
                <MenuItem key={i} value={d.ptype_id}>
                  {d.ptype_name}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="col-12 col-sm-6 mt-3">
            <TextField
              {...register("pdetail", {
                required: "กรุณากรอกรายละเอียดครุภัณฑ์ หรือ ว่างให้ใส่ - ",
              })}
              fullWidth
              id="outlined-basic"
              label="คุณลักษณะ"
              multiline={true}
              variant="outlined"
              type="text"
              error={!!errors?.pdetail}
              helperText={errors?.pdetail ? errors.pdetail.message : null}
            />
          </div>
          <div className="col-12 col-sm-4 mt-3">
            <div className="file-card">
              <div className="file-inputs">
                <div className="imge">
                  <FaCloudUploadAlt />
                  <div className="nimg">อัพโหลดรูปภาพ</div>
                </div>
                <button>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    type="file"
                    name="photo"
                    // label="รูปภาพ"
                    onChange={onImageChange}
                    className="bg-danger"
                  />
                </button>
              </div>
              {imageURLs.map((imageSrc, idx) => (
                <img key={idx} className="imageShow" src={imageSrc} alt="" />
              ))}
            </div>
          </div>
          <div className="col-12 col-sm-4 mt-3">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                สถานะครุภัณฑ์
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="pstatus_id"
                value={input.pstatus_id || ""}
                onChange={onInputChange}
                label="สถานะครุภัณฑ์"
                required
              >
                {pstatus.map((status, id) => (
                  <MenuItem key={id} value={status.pstatus_id}>
                    {status.pstatus_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col-12 col-sm-4 mt-3">
            <TextField
      {...register('fisicalyear',{
              maxLength:{
                value:4,
                message:"ไม่เกิน 4 ตัวอักษร"
              }
      })}
      error={!!errors?.fisicalyear}
      helperText={errors?.fisicalyear ? errors.fisicalyear.message : null}
              fullWidth
              id="outlined-basic"
              label="ปีงบประมาณ"
              variant="outlined"
              type="number"

            />
          </div>
          <div className="col-12 col-sm-4 mt-3">
            <TextField
              fullWidth
              type="date"
              id="outlined-basic"
              label="วันที่ซื้อ"
              variant="outlined"
              name="buydate"
              defaultValue="Hello World"
              value={input.buydate || ""}
              onChange={onInputChange}
              focused
              required
            />
          </div>
          <div className="col-12 col-sm-4 mt-3">
            <TextField
              placeholder=" "
              fullWidth
              id="outlined-basic"
              label="วันที่รับ"
              variant="outlined"
              type="date"
              name="pickdate"
              value={input.pickdate || ""}
              onChange={onInputChange}
              focused
              required
            />
          </div>
          <div className="col-12 col-sm-2 mt-3">
            <TextField
              fullWidth
              id="outlined-basic"
              label="จำนวน"
              variant="outlined"
              name="qty"
              value={1}
            />
          </div>
          <div className="col-12 col-sm-2 mt-3">
            <TextField
              fullWidth
              id="outlined-basic"
              label="หน่วยนับ"
              variant="outlined"
              name="unit"
              value={input.unit || ""}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="col-12 col-sm-4 mt-3">
            <TextField
              fullWidth
              id="outlined-basic"
              label="ราคา/หน่วย"
              variant="outlined"
              name="price"
              type="number"
              value={input.price || ""}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="col-12 col-sm-4 mt-3">
            <TextField
              fullWidth
              id="outlined-basic"
              label="ที่มาครุภัณฑ์"
              variant="outlined"
              name="get"
              value={input.get || ""}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="col-12 col-sm-4 mt-3">
            <TextField
              fullWidth
              id="outlined-basic"
              label="ประเภทเงิน"
              variant="outlined"
              name="finance"
              value={input.finance || ""}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="col-12 col-sm-6 mt-3">
            <TextField
              fullWidth
              id="outlined-basic"
              label="รายละเอียดผู้ขาย"
              multiline
              variant="outlined"
              name="seller"
              value={input.seller || ""}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="col-12 col-sm-6 mt-3">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                หน่วยงานที่ติดตั้ง
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="sub_aid"
                value={input.sub_aid || ""}
                onChange={onInputChange}
                label="หน่วยงานที่ติดตั้ง"
                required
                // onChange={handleChange}
              >
                {subagen.map((s, id) => (
                  <MenuItem key={id} value={s.sub_aid}>
                    {s.sub_aname}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <MDBModalFooter className="mt-3 gap-2">
            <Button
              type="submit"
              variant="contained"
              color="success"
              className="mt-2"
            >
              บันทึก
            </Button>
            <Button
              // variant="outlined"
              color="error"
              className="mt-2"
              onClick={Cancel}
            >
              ยกเลิก
            </Button>
          </MDBModalFooter>{" "}
        </form>
      </div>
    </div>
  );
}

export default ProductAdd;
