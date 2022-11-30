import React, { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import * as BiIcon from "react-icons/bi";
import "./Header.css";

function Header() {
  const [side, setSide] = useState(false);
  const Side = () => {
    setSide(!side);
  };
  return (
    <>
      <div className="head d-flex flex-row align-items-center justify-content-evenly gap-2">
        <div
          className="col-1 fw-bolder fs-5 align-items-center justify-content-center d-flex ps-3"
          onClick={Side}
        >
          <AiOutlineMenuUnfold />
        </div>
        <div className="col d-flex text-center justify-content-center align-items-center flex-wrap fw-bolder headname  ">
          ระบบตรวจสอบครุภัณฑ์ สำนักส่งเสริมวิชาการและงานทะเบียน
        </div>
        <div className="col-3 col-md-4 col-lg-3 col-xl-2 drop ">
          <div className="d-flex align-items-center  ">
            <div className="d-none d-md-flex username">
              {" "}
              username username &nbsp;{" "}
            </div>
            <div className="log ms-3 me-2">
              <BiIcon.BiPowerOff className="logicon" /> Logout
            </div>
          </div>
        </div>
      </div>
      <div className={side ? "bodynav active" : "bodynav "}>
        <div
          className="fw-bolder fs-5 justify-content-end d-flex me-2 iconnav "
          onClick={Side}
        >
          <AiOutlineMenuFold />
        </div>
        <div className="sidemenu">
          <div className="link">
            <div>
              <BiIcon.BiTable /> &nbsp; ครุภัณฑ์
            </div>
          </div>
          <div className="link">
            <div>
              <BiIcon.BiQrScan /> &nbsp; สแกน QR code
            </div>
          </div>
          <div className="link">
            <div>
              <BiIcon.BiSitemap /> &nbsp; หน่วยงาน
            </div>{" "}
          </div>
          <div className="link">
            <div>
              <BiIcon.BiUserCircle /> &nbsp; เจ้าหน้าที่
            </div>
          </div>
          <div className="link">
            <div>
              {" "}
              <BiIcon.BiFile /> &nbsp; ออกรายงาน
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
