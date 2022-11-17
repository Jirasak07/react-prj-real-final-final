import React from "react";
import { FaBars } from "react-icons/fa";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Head.css";
function Header() {
  return (
    <>
      <div className="nav-head">
        <MDBContainer fluid>
          <MDBRow className="align-items-center h-100 ">
            <MDBCol className=" h-100 bars ">
              <FaBars />
            </MDBCol>
            <MDBCol className="d-flex justify-content-center fw-normal logo ">
              ระบบตรวจสอบครุภัณฑ์ สำนักส่งเสริมวิชาการและงานทะเบียน
            </MDBCol>
            <MDBCol className="d-flex justify-content-center name-d">
              ชื่อผู้ใช้ icon dropdown
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className="sidebar">
        
      </div>
    </>
  );
}

export default Header;
