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
function ProductAddGroup(props) {
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
    // e.preventDefault();
    const count = input.qty;
    for(let i = 1 ; i <= count; i++){
       axios
      .post("http://localhost:3333/product-added", {
        pid: input.pid + "/" + i,
        pname: input.pname,
        pdetail: input.pdetail,
        qty: 1,
        unit: input.unit,
        price: input.price,
        finance: input.finance,
        acquirement: input.get,
        ptype_id: input.ptype_id,
        seller: input.seller,
        sub_aid: input.sub_aid,
        pstatus_id: input.pstatus_id,
        buydate: input.buydate,
        pickdate: input.pickdate,
        fisicalyear: input.fisicalyear,
        image: input.pid + typename,
      })
      .then((res) => {
        console.log(res.data.status)
        alert(res.data.status)
      });
    }
   
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
  const mid = localStorage.getItem("main_aid");
  const [subagen, setSubAgen] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:3333/show-sub-agen-where-main", {
        main_aid: mid,
      })
      .then((res) => {
        setSubAgen(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <div>
      <div className="container">
        <form className="row justify-content-center">
          <div className="col-12 col-sm-6 mt-3 ">
            <TextField
              name="pid"
              value={input.pid || ""}
              onChange={onInputChange}
              fullWidth
              id="outlined-basic"
              label="หมายเลขครุภัณฑ์"
              variant="outlined"
              type="text"
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
              type="text"
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
                  <MenuItem value={d.ptype_id}>{d.ptype_name}</MenuItem>
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
              multiline={true}
              variant="outlined"
              type="text"
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
                {pstatus.map((status) => (
                  <MenuItem value={status.pstatus_id}>
                    {status.pstatus_name}
                  </MenuItem>
                ))}
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
              type="number"
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
                {subagen.map((s) => (
                  <MenuItem value={s.sub_aid}>{s.sub_aname}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </form>
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

export default ProductAddGroup;
