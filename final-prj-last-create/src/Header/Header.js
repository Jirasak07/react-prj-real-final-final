import React, { useEffect, useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import * as BiIcon from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import "./Header.css";
import axios from "axios";
import Logo from "../Image/LOGO RGB PNG-สำหรับงานนำเสนอแบบดิจิติล.png";
import { Add } from 'evergreen-ui'

function Header() {
  const [head, setHead] = useState(false);
  useEffect(() => {
    const login = window.location.pathname;
    if (login === "/") {
      // console.log("loginn")
      setHead(true);
    } else {
      // console.log('not login')
      setHead(false);
    }
  });
  const navi = useNavigate();
  const [name, setName] = useState("noname");
  const user_id = localStorage.getItem("user_id");
  const [side, setSide] = useState(false);
  const Side = () => {
    setSide(!side);
  };
  const Logout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("main_aid");
    localStorage.removeItem("token");
    navi("/");
  };
  useEffect(() => {
    axios
      .post("http://localhost:3333/show-user-login", {
        user_id: user_id,
      })
      .then((res) => {
        setName(res.data[0].name);
        console.log(res.data[0].name);
      });
  });
  const [nav, setNav] = useState(false);
  const changNav = () => {
    if (window.scrollY >= 40) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changNav);
  // console.log("header");
  return (
    <div className={head ? "d-none" : ""}>
      <div
        onClick={Side}
        className={side ? "bg-overlay" : "bg-overlay bg-o"}
      ></div>
      <div
        className={
          nav
            ? "head active d-flex flex-row align-items-center justify-content-evenly gap-2"
            : "head d-flex flex-row align-items-center justify-content-evenly gap-2"
        }
      >
        <div
          className=" col fw-bolder fs-5 align-items-center justify-content-center d-flex ps-3"
          onClick={Side}
        >
          <AiOutlineMenuUnfold  />
        </div>
        <div className="col-7 h-100 d-flex justify-content-start align-items-center flex-wrap fw-bolder headname">
          <div className="d-flex w-100 flex-row gap-3 gap-sm-2 h-100">
            <div className="col-1 d-flex justify-content-center align-items-center  ">
              <img src={Logo} className="h-75" />
            </div>{" "}
            <div className="col-10  d-flex justify-content-start align-items-center ">
              ระบบตรวจสอบครุภัณฑ์ สำนักส่งเสริมวิชาการและงานทะเบียน
            </div>
          </div>
        </div>
        <div className="col-3 col-md-4 col-lg-3 col-xl-2 drop ">
          <div className="d-flex align-items-center ">
            <div className="d-none d-md-flex username align-items-center profile text-success">
              {" "}
              <FaUserCircle className="ichover" /> &nbsp;
              {name} &nbsp;{" "}
            </div>
            <div className="log ms-3 me-2 " onClick={Logout}>
              <BiIcon.BiPowerOff className="logicon" />
              {/* Logout */}
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
          <NavLink to="/home" className="link">
            <div>
              <BiIcon.BiTable /> &nbsp; ครุภัณฑ์
            </div>
          </NavLink>
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
          <NavLink to="/test" className="link">
            <div className="text-link">
              {" "}
              <BiIcon.BiFile /> &nbsp; ทดสอบ Validate
            </div>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
