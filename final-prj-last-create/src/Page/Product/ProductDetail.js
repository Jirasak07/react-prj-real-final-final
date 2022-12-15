import React from "react";
import GenQRcode from "../../QRCode/GenQRcode";
import "./StyleProduct.css";
function ProductDetail(props) {
  return (
    <>
      <div className="container showwdet">
        <div className="row justify-content-center gap-1">
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center ">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_960_720.jpg"
            //   className="w-100 h-100 rounded img-detail"
            width={250}
            />
          </div>

          <div className="detaill col-12 rounded bg-info ">
            <div className="row">
              <div className="col-5">
                <div>หมายเลขครุภัณฑ์ : {props.id}</div>
                <div>ชื่อครุภัณฑ์ : {props.id}</div>
                <div>หน่วยงานที่ติดตั้ง : {props.id}</div>
                <div>ประเภท : {props.id}</div>
                <div>จำนวน : {props.id}</div>
                <div>ราคาต่อหน่วย : {props.id}</div>
                <div>ประเภทเงิน : {props.id}</div>
                <div>รายละเอียดผู้ขาย : {props.id}</div>
              </div>
              <div className="col-5">
                {" "}
                <div>วันเดือนปีที่ซื้อ : {props.id}</div>
                <div>วันเดือนปีที่รับ : {props.id}</div>
                <div>ที่มาครุภัณฑ์ : {props.id}</div>
                <div>สถานะ : {props.id}</div>
                <div>ข้อมูลล่าสุด : {props.id}</div>
                <div>ผู้ตรวจ : {props.id}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
