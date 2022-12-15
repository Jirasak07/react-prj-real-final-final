import React from "react";
import "./HeaderStyle.css";
import Logo from "../../Image/LOGO RGB PNG-สำหรับงานนำเสนอแบบดิจิติล.png";

function Header() {
  return (
    <div className="mt-3">
      <div className="head-bar row rounded">
        <div className="logo col-2 h-100  ">
          <img src={Logo} className="config-image" />
        </div>
        <div className="system-name col-8 h-100">
          <div>ระบบตรวจสอบครุภัณฑ์ </div>
          <div>สำนักส่งเสริมวิชาการและงานทะเบียน</div>{" "}
        </div>
        <div className="manage-header col-2">1</div>
      </div>
    </div>
  );
}

export default Header;
