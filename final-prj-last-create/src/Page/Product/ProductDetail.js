import React, { useState,useEffect } from "react";
import GenQRcode from "../../QRCode/GenQRcode";
import { TextInputField, TextareaField, Button } from "evergreen-ui";
import "./StyleProduct.css";
import axios from "axios";
function ProductDetail(props) {
  const [image,setImage] = useState()
  useEffect(() => {
    axios.post('http://localhost:3333/find-img',{
      pid: props.id
    }).then((res)=>{
      setImage("http://localhost:3333/img/"+res.data[0].image)
    })
  }, [props.id])
  return (
    <>
      <div className="container showwdet">
        {/* <div>{image}</div> */}
        <div className="row justify-content-center gap-1">
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center mb-2 ">
            <img
              src={image}
              //   className="w-100 h-100 rounded img-detail"
              width={250}
            />
          </div>

          <div className="detaill col-12 rounded">
            <div className="row d-flex justify-content-center">
              <div className="col-6">
                <TextInputField
                  label="หมายเลขครุภัณฑ์"
                  placeholder="Placeholder text"
                  value={props.id}
                  disabled
                />
              </div>
              <div className="col-6">
                <TextInputField
                  label="รายการครุภัณฑ์"
                  value={props.id}
                  disabled
                />
              </div>
              <div className="col-6">
                <TextareaField
                  label="คุณลักษณะครุภัณฑ์"
                  value={props.id}
                  disabled
                />
              </div>
              <div className="col-6">
                <TextInputField
                  disabled
                  label="ประเภทครุภัณฑ์"
                  value="ครุภัณฑ์สำนักงาน"
                />
              </div>

              <div className="col-2 ">
                <TextInputField disabled label="จำนวน" value={"1 เครื่อง"} />
              </div>
              <div className="col-5  ">
                {" "}
                <TextInputField
                  disabled
                  label="ราคาต่อหน่วย"
                  value={"1500000"}
                />
              </div>
              <div className="col-5 ">
                {" "}
                <TextInputField
                  disabled
                  label="ประเภทเงิน"
                  value={"งบประมาณแผ่นดิน"}
                />
              </div>
              <div className="col-6">
                <TextInputField
                  label="ข้อมูลผู้ขาย"
                  value={props.id}
                  disabled
                />
              </div>
              <div className="col-6">
                <TextInputField
                  label="ที่มาครุภัณฑ์"
                  value={props.id}
                  disabled
                />
              </div>
              <div className="col-4">
                <TextInputField
                  label="วันเดือนปีที่ซื้อ"
                  disabled
                  value={"11/01/111"}
                />
              </div>
              <div className="col-4">
                {" "}
                <TextInputField
                  label="วันเดือนปีที่รับ"
                  disabled
                  value={"11/01/111"}
                />
              </div>
              <div className="col-4">
                    <TextInputField 
                label="ปีงบประมาณ"
                disabled
                value={"2565"}
                />
              </div>
              <div className="col-6">
                <TextInputField 
                 label="หน่วยงานที่ติดตั้ง"
                 disabled
                 value={"งานทะเบียนและประมวลผล"}
                />
              </div>
              <div className="col-6">
              <TextInputField 
                 label="สถานะการใช้งาน"
                 disabled
                 value={"ใช้งานปกติ"}
                />
              </div>
              <div className="col-6">
                <TextInputField 
                 label="ข้อมูลล่าสุดวันที่"
                 disabled
                 value={"11-11-1111"}
                />
              </div>
              <div className="col-6">
              <TextInputField 
                 label="ผู้ตรวจ"
                 disabled
                 value={"จิรศักดิ์ สิงหบุตร"}
                />
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
