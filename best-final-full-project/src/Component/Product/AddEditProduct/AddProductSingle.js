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
function AddProductSingle(props) {
  const [input, setInput] = useState([]);
  const [num, setNum] = useState(1);
  const [selectagen, setSelectAgen] = useState([]);
  const [ptype, setPtype] = useState([]);
  const [pstatus, setPstatus] = useState([]);
  const [subagen, setSubAgen] = useState([]);
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
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
    console.log(input)
    axios
      .post("http://localhost:3333/product-added", {
        pid: input.pid,
        pname: input.pname,
        pdetail: input.pdetail,
        qty: 1,
        unit:input.unit,
        price: input.price,
        finance: input.finance,
        acquirement: input.acquirement,
        ptype_id: input.ptype_id,
        seller: input.seller,
        sub_aid: input.sub_aid,
        pstatus_id: input.pstatus_id,
        buydate: input.buydate,
        pickdate: input.pickdate,
        fisicalyear: input.fisicalyear,
      })
      .then((res) => {
        console.log(res);
      });
    // const url = "http://localhost:3333/upload";
    // const formData = new FormData();

    // formData.append("photo", file,input.pid+typename);
    // console.log(file)
    // axios.post(url, formData).then((response) => {
    //   console.log(response);
    // });
  };
  const onHandleChange = (e) => {
    alert("1234");
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
      <MDBContainer>
        {/* ????????? 1 */}
        <MDBRow>
          <MDBCol md="4">
            <MDBInput
              name="pid"
              value={input.pid || ""}
              onChange={onChange}
              label="?????????????????????????????????????????????"
              outline
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              name="pname"
              value={input.pname || ""}
              onChange={onChange}
              label="??????????????????????????????"
              outline
            />
          </MDBCol>
          <MDBCol md="4">
            <SelectField
              name="ptype_id"
              label="??????????????????????????????????????????"
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
        {/* ????????? 2 */}
        <MDBRow>
          <MDBCol md="6">
            <MDBInput
              name="pdetail"
              value={input.pdetail || ""}
              onChange={onChange}
              type="textarea"
              label="???????????????????????????"
              outline
            />
          </MDBCol>

          <MDBCol md="6" className="upload">
            <div className="file-card">
              <div className="file-inputs">
                <div className="imge">
                  <FaCloudUploadAlt />
                  <div className="nimg">???????????????????????????????????????</div>
                </div>
                <button>
                  <input
                    type="file"
                    name="photo"
                    label="??????????????????"
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
        {/* ????????? 3 */}
        <MDBRow>
          <MDBCol md="4">
            <MDBInput
              hint=" "
              name="buydate"
              value={input.buydate || ""}
              onChange={onChange}
              type="date"
              label="??????????????????????????????"
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
              label="???????????????????????????"
              outline
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              name="fisicalyear"
              value={input.fisicalyear || ""}
              onChange={onChange}
              type="text"
              label="??????????????????????????????"
              outline
            />
          </MDBCol>
        </MDBRow>
        {/* ????????? 4 */}
        <MDBRow>
          <MDBCol md="4">
            <MDBInput
              name="qty"
              type="number"
              value={num}
              label="???????????????"
              outline
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              name="unit"
              value={input.unit || ""}
              onChange={onChange}
              type="text"
              label="????????????????????????"
              outline
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              name="price"
              value={input.price || ""}
              onChange={onChange}
              type="number"
              label="????????????????????????????????????"
              outline
            />
          </MDBCol>
        </MDBRow>
        {/* ????????? 5 */}
        <MDBRow>
          <MDBCol md="4">
            <MDBInput
              name="finance"
              value={input.finance || ""}
              onChange={onChange}
              label="??????????????????????????????"
              outline
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              name="acquirement"
              value={input.acquirement || ""}
              onChange={onChange}
              label="???????????????????????????????????????"
              outline
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              name="seller"
              value={input.seller || ""}
              onChange={onChange}
              label="????????????????????????????????????????????????"
              outline
            />
          </MDBCol>
        </MDBRow>
        {/* ????????? 6 */}

        {/* ????????? 7 */}
        <MDBRow className="my-2 mb-3">
          <MDBCol md="6">
            {/* <MDBInput label="??????????????????????????????????????????????????????" outline /> */}
            <SelectField
              name="sub_aid"
              label="??????????????????????????????????????????????????????"
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
            {/* <MDBInput label="?????????????????????????????????" outline /> */}
            <SelectField
              name="pstatus_id"
              label="?????????????????????????????????"
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
          ??????????????????
        </div>
        <div className="btn btn-danger btn-sm" onClick={props.close}>
          ??????????????????
        </div>
      </MDBModalFooter>
    </div>
  );
}

export default AddProductSingle;
