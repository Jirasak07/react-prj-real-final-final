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
      console.log(res.data);
    });

    axios.get("http://localhost:3333/show-pstatus").then((res) => {
      setPstatus(res.data);
    });
  }, []);

  const Submit = () => {
    let timerInterval;
    MySwal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 900,
      icon: "success",
      timerProgressBar: true,
      didOpen: () => {
        MySwal.showLoading();
        const b = MySwal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = MySwal.getTimerLeft();
        }, 1200);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    })
      .then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      })
      .then((value) => {
        setTimeout(() => {
          props.toggleShow();
        }, 100);
      });
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
    console.log("." + e.target.files[0].type.split("image/")[1]);
    setTypeName("." + e.target.files[0].type.split("image/")[1]);
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 mt-3 ">
            <TextField
              name="pid"
              value={input.pid || ""}
              onChange={onInputChange}
              fullWidth
              id="outlined-basic"
              label="หมายเลขครุภัณฑ์"
              variant="outlined"
            />
          </div>
          <div className="col-12 col-sm-6 mt-3">
            <TextField
              name="pname"
              value={input.pname || ""}
              onChange={onInputChange}
              fullWidth
              id="outlined-basic"
              label="รายการ"
              variant="outlined"
            />
          </div>
          <div className="col-12 col-sm-6 mt-3">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                ประเภทครุภัณฑ์
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="ptype_id"
                value={input.ptype_id || ""}
                onChange={onInputChange}
                label="ประเภทครุภัณฑ์"
                // onChange={handleChange}
              >
                {ptype.map((d, i) => (
                  <MenuItem value={d.pty_id}>{d.ptype_name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col-12 col-sm-6 mt-3">
            <TextField
              name="pdetail"
              value={input.pdetail || ""}
              onChange={onInputChange}
              fullWidth
              id="outlined-basic"
              label="คุณลักษณะ"
              multiline
              variant="outlined"
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
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-12 col-sm-4 mt-3">
            <TextField
              name="fisicalyear"
              value={input.fisicalyear || ""}
              onChange={onInputChange}
              fullWidth
              id="outlined-basic"
              label="ปีงบประมาณ"
              variant="outlined"
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
              value={input.buydate || " "}
              onChange={onInputChange}
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
              value={input.pickdate || " "}
              onChange={onInputChange}
            />
          </div>
          <div className="col-12 col-sm-2 mt-3">
            <TextField
              fullWidth
              id="outlined-basic"
              label="จำนวน"
              variant="outlined"
              name="qty"
              value={input.qty || ""}
              onChange={onInputChange}
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
            />
          </div>
          <div className="col-12 col-sm-4 mt-3">
            <TextField
              fullWidth
              id="outlined-basic"
              label="ราคา/หน่วย"
              variant="outlined"
              name="price"
              value={input.price || ""}
              onChange={onInputChange}
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
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <MDBModalFooter className="mt-3">
        <div className="btn btn-info btn-sm" onClick={Submit}>
          บันทึก
        </div>
        <div className="btn btn-cancel btn-sm" onClick={props.toggleShow}>
          ยกเลิก
        </div>
      </MDBModalFooter>
    </div>
  );
}

export default ProductAdd;
