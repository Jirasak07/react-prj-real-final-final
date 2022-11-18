import { MDBCol, MDBContainer, MDBInput, MDBRow } from "mdbreact";
import React from "react";

function Add_Product_Single() {
  
  return (
    <div>
      <MDBContainer>
        ครุภัณฑ์
        <MDBRow>
          <MDBCol sm="4">
            <MDBInput label="หมายเลขครุภัณฑ์" outline />
          </MDBCol>
          <MDBCol sm="4">
            <MDBInput label="รายการครุภัณฑ์" outline />
          </MDBCol>
          <MDBCol sm="4">
            <MDBInput label="ประเภทครุภัณฑ์" outline />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="6">
            <MDBInput type="textarea" label="คุณลักษณะครุภัณฑ์" outline />
          </MDBCol>
          <MDBCol sm="4">
            รูปภาพ
            <input className="form-control" type="file" outline />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="4">
            <MDBInput type="date" label="วันที่ซื้อ" hint="1" outline />
          </MDBCol>
          <MDBCol sm="4">
            <MDBInput type="date" label="วันที่รับ" hint="1" outline />
          </MDBCol>
          <MDBCol sm="4">
            <MDBInput type="text" label="ปีงบประมาณ" outline />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="4">
            <MDBInput label="จำนวน" type="number" outline />
          </MDBCol>
          <MDBCol sm="4">
            <MDBInput label="หน่วยนับ" type="text" outline />
          </MDBCol>
          <MDBCol sm="4">
            <MDBInput label="ราคา" type="number" outline />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="4">
            <MDBInput label="จำนวน" type="number" outline />
          </MDBCol>
          <MDBCol sm="4">
            <MDBInput label="หน่วยนับ" type="text" outline />
          </MDBCol>
          <MDBCol sm="4">
            <MDBInput label="ราคา" type="number" outline />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="4">
            <MDBInput label="รายละเอียดผู้ขาย" type="number" outline />
          </MDBCol>
          <MDBCol sm="4">
            <MDBInput label="ที่มาครุภัณฑ์" type="text" outline />
          </MDBCol>
          <MDBCol sm="4">
            <MDBInput label="ประเภทเงิน" type="number" outline />
          </MDBCol>
        </MDBRow>
        หน่วยงานที่ติดตั้ง
        <MDBRow>
          <MDBCol sm="6">
            <MDBInput label="หน่วยงานหลัก" outline />
          </MDBCol>
          <MDBCol sm="6">
            <MDBInput type="text" label="สถานะครุภัณฑ์" outline />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Add_Product_Single;
