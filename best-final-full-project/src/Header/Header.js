import React, { useState, useEffect } from "react";
import "./StyleHeader.css";
import { FaBars } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import {
  HiOutlineDesktopComputer,
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
  HiOutlinePrinter,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import "../style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Header() {
  const [user, setUser] = useState(" text ");
  const uid = localStorage.getItem("user_id");
  const navi = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("login");
    navi("/");
  };

  const [side, setSide] = useState(false);
  const setSidebar = () => {
    setSide(!side);
  };
  useEffect(() => {
    axios
      .post("http://localhost:3333/show-user-login", {
        user_id: uid,
      })
      .then((res) => {
        setUser(res.data[0].name);
        // console.log(res.data[0].name)
      });
  }, []);
  // console.log(window.location.href);
  return (
    <>
      <div className="nav">
        <div className="col-12 sname">
          <FaBars onClick={setSidebar} className="icon" />{" "}
          <NavLink to="/product" className=" stname">
            {" "}
            ระบบตรวจสอบครุภัณฑ์{" "}
          </NavLink>
        </div>
      </div>
      {/*  sidenav */}
      <div className={side ? "navbody" : " navbody none"}>
        <div className="side-body">
          <div className="bar-icon">
            <FaBars onClick={setSidebar} />{" "}
          </div>
          <div className="nav-group">
            <div className="text-secondary">
              <BsDot className="iccc text-success" /> {user}
            </div>
            <NavLink to="/product" className="nav-item">
              &nbsp;
              <HiOutlineDesktopComputer /> ครุภัณฑ์
            </NavLink>
            <NavLink to="/agen" className="nav-item">
              &nbsp;
              <HiOutlineOfficeBuilding />
              หน่วยงาน
            </NavLink>
            <NavLink to="/user" className="nav-item">
              &nbsp;
              <HiOutlineUserGroup />
              เจ้าหน้าที่
            </NavLink>
            <NavLink to="/report" className="nav-item">
              &nbsp;
              <HiOutlinePrinter />
              ออกรายงาน
            </NavLink>
            <div className="nav-item logout" onClick={logout}>
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
