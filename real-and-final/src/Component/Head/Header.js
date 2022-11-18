import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaHome} from 'react-icons/fa'
import {HiDocumentText} from 'react-icons/hi'
import {HiBuildingOffice2} from 'react-icons/hi2'
import logokpru from '../../image/LOGO RGB PNG-สำหรับงานนำเสนอแบบดิจิติล.png' 
import {FaUsersCog} from 'react-icons/fa'
import "./Head.css";
import { NavLink } from "react-router-dom";
function Header() {
  const [side, setSide] = useState(false);
  return (
    <div className="app">
      <div
        onClick={(closSide) => setSide(!side)}
        className={side ? "bg" : "bg fade disabled"}
      ></div>
      <div className="nav-head">
        <MDBContainer fluid>
          <MDBRow className="boxnav">
            <MDBCol
              size="1"
              className=" h-100 bars d-flex align-items-center "
            >
              <FaBars onClick={(closSide) => setSide(!side)} />
            </MDBCol>
            <MDBCol size="11" md="9" className=" d-flex justify-content-center  align-items-center  logo h-100 ">
            <img src={logokpru} width='30px' /> &nbsp;  ระบบตรวจสอบครุภัณฑ์ สำนักส่งเสริมวิชาการและงานทะเบียน
            </MDBCol>
            <MDBCol className="   name-d h-100 ">
              ชื่อผู้ใช้ icon dropdown
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className={side ? "sidebar" : "sidebar clos"}>
        <div className="sidenav-body">
          <div className="menu-title" >MENU</div>
          <div className="nav-item">
            <NavLink to="/product" className="mx-3 cusFont">
              <div className="icon"><FaHome/></div>
              <div className="menu">ครุภัณฑ์</div>
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/agen" className="mx-3 cusFont">
              <div className="icon"><HiBuildingOffice2/></div>
              <div className="menu">หน่วยงาน</div>
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/user" className="mx-3 cusFont">
              <div className="icon"><FaUsersCog/></div>
              <div className="menu">เจ้าหน้าที่</div>
            </NavLink>
          </div>{" "}
          <div className="nav-item">
            <NavLink to="/report" className="mx-3 cusFont">
              <div className="icon"><HiDocumentText/></div>
              <div className="menu">ออกรายงาน</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
