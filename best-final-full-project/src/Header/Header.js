import React, { useState, useEffect } from "react";
import "./StyleHeader.css";
import { FaBars } from "react-icons/fa";
import {
  HiOutlineDesktopComputer,
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
  HiOutlinePrinter,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import "../style.css";

function Header() {
  const [side, setSide] = useState(false);
  const setSidebar = () => {
    setSide(!side);
  };
  return (
    <>
      <div className="nav">
        <div className="col-12 sname">
          <FaBars onClick={setSidebar} className="icon" /> ระบบตรวจสอบครุภัณฑ์
        </div>
      </div>
      {/*  sidenav */}
      <div className={side ? "navbody" : " navbody none"}>
        <div className="side-body">
          <div className="bar-icon">
            <FaBars onClick={setSidebar} />{" "}
          </div>
          <div className="nav-group">
            User: จิรศักดิ์ สิงหบุตร
            <NavLink to="/product" className="nav-item">
              &nbsp;
              <HiOutlineDesktopComputer /> ครุภัณฑ์
            </NavLink>
            <NavLink className="nav-item">
              &nbsp;
              <HiOutlineOfficeBuilding />
              หน่วยงาน
            </NavLink>
            <NavLink className="nav-item">
              &nbsp;
              <HiOutlineUserGroup />
              เจ้าหน้าที่
            </NavLink>
            <NavLink className="nav-item">
              &nbsp;
              <HiOutlinePrinter />
              ออกรายงาน
            </NavLink>
            <div className="nav-item logout">
              &nbsp;
              <MdLogout />
              ออกจากระบบ
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
