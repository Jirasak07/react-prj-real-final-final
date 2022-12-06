import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBModalFooter,
} from "mdbreact";
import React, { useState, useEffect } from "react";
import "./StyleProductAdd.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import { SelectField } from "evergreen-ui";
import axios from "axios";
function AddProductGroup(props) {
  const [input, setInput] = useState([]);
  const [selectagen, setSelectAgen] = useState([]);
  const [ptype, setPtype] = useState([]);
  const [pstatus, setPstatus] = useState([]);
  const [subagen, setSubAgen] = useState([]);
  const [count, setCount] = useState();
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input.qty);
  };
  useEffect(() => {
    axios.get("http://localhost:3333/show-product-type").then((res) => {
      setPtype(res.data);
    });

    axios.get("http://localhost:3333/show-pstatus").then((res) => {
      setPstatus(res.data);
    });
  }, []);
  const mid = localStorage.getItem("main_aid");
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
  const onSubmit = () => {
    const count = input.qty;

    console.log(count);
    // console.log(input);
    axios
      .post("http://localhost:3333/product-added-group", {
        pid: input.pid,
        pname: input.pname,
        pdetail: input.pdetail,
        qty: input.qty,
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
        console.log(res);
        const url = "http://localhost:3333/upload";
        const formData = new FormData();
        formData.append("photo", file, input.pid + typename);
        axios.post(url, formData).then((response) => {
          console.log(response);
        });
      });
  };
  const onHandleChange = (e) => {
    alert("1234");
  };
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [file, setFile] = useState();
  const [typename, setTypeName] = useState();
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
      <MDBContainer>
        {/* แถว 1 */}
        <MDBRow>
          <MDBCol md="4">
            <MDBInput
              name="pid"
              value={input.pid || ""}
              onChange={onChange}
              label="หมายเลขครุภัณฑ์"
              outline
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              name="pname"
              value={input.pname || ""}
              onChange={onChange}
              label="ชื่อรายการ"
              outline
            />
          </MDBCol>
          <MDBCol md="4">
            <SelectField
              name="ptype_id"
              label="ประเภทครุภัณฑ์"
              value={input.ptype_id || ""}
              onChange={onChange}
            >
              {ptype.map((item, index) => (
                <option key={index} value={item.ptype_id || " "}>
                  {item.ptype_name}
                </option>
              ))}
            </SelectField>
          </MDBCol>
        </MDBRow>
        {/* แถว 2 */}
        <MDBRow>
          <MDBCol md="6">
            <MDBInput
              name="pdetail"
              value={input.pdetail || ""}
              onChange={onChange}
              type="textarea"
              label="คุณลักษณะ"
              outline
            />
          </MDBCol>

          <MDBCol md="6" className="upload">
            <div className="file-card">
              <div className="file-inputs">
                <div className="imge">
                  <FaCloudUploadAlt />
                  <div className="nimg">อัพโหลดรูปภาพ</div>
                </div>
                <button>
                  <input
                    type="file"
                    name="photo"
                    label="รูปภาพ"
                    onChange={onImageChange}
                  />
                </button>
              </div>
              {imageURLs.map((imageSrc, idx) => (
                <img key={idx} className="imageShow" src={imageSrc} />
              ))}
            </div>
          </MDBCol>
        </MDBRow>
        {/* แถว 3 */}
        <MDBRow>
          <MDBCol md="4">
            <MDBInput
              hint=" "
              name="buydate"
              value={input.buydate || ""}
              onChange={onChange}
              type="date"
              label="วันที่ซื้อ"
              outline
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              name="pickdate"
              value={input.pickdate || ""}
              onChange={onChange}
              type="date"
              hint="  "
              label="วันที่รับ"
              outline
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              name="fisicalyear"
              value={input.fisicalyear || ""}
              onChange={onChange}
              type="text"
              label="ปีงบประมาณ"
              outline
            />
          </MDBCol>
        </MDBRow>
        {/* แถว 4 */}
        <MDBRow>
          <MDBCol md="4">
            <MDBInput
              name="qty"
              type="number"
              value={input.qty || ""}
              onChange={onChange}
              label="จำนวน"
              outline
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              name="unit"
              value={input.unit || ""}
              onChange={onChange}
              type="text"
              label="หน่วยนับ"
              outline
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              name="price"
              value={input.price || ""}
              onChange={onChange}
              type="number"
              label="ราคาต่อหน่วย"
              outline
            />
          </MDBCol>
        </MDBRow>
        {/* แถว 5 */}
        <MDBRow>
          <MDBCol md="4">
            <MDBInput
              name="finance"
              value={input.finance || ""}
              onChange={onChange}
              label="ประเภทเงิน"
              outline
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              name="acquirement"
              value={input.acquirement || ""}
              onChange={onChange}
              label="ที่มาครุภัณฑ์"
              outline
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              name="seller"
              value={input.seller || ""}
              onChange={onChange}
              label="รายละเอียดผู้ขาย"
              outline
            />
          </MDBCol>
        </MDBRow>
        {/* แถว 6 */}

        {/* แถว 7 */}
        <MDBRow className="my-2 mb-3">
          <MDBCol md="6">
            {/* <MDBInput label="หน่วยงานที่ติดตั้ง" outline /> */}
            <SelectField
              name="sub_aid"
              label="หน่วยงานที่ติดตั้ง"
              value={input.sub_aid || ""}
              onChange={onChange}
            >
              {subagen.map((item, index) => (
                <option key={index} value={item.sub_aid || " "}>
                  {item.sub_aname}
                </option>
              ))}
            </SelectField>
          </MDBCol>
          <MDBCol md="6">
            {/* <MDBInput label="สถานะตอนรับ" outline /> */}
            <SelectField
              name="pstatus_id"
              label="สถานะตอนรับ"
              value={input.pstatus_id || ""}
              onChange={onChange}
            >
              {pstatus.map((status, id) => (
                <option key={id} value={status.pstatus_id || " "}>
                  {status.pstatus_name}
                </option>
              ))}
            </SelectField>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBModalFooter>
        <div className="btn btn-success btn-sm" onClick={onSubmit}>
          บันทึก
        </div>
        <div className="btn btn-danger btn-sm" onClick={props.close}>
          ยกเลิก
        </div>
      </MDBModalFooter>
    </div>
  );
}

export default AddProductGroup;
