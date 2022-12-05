import React, { useState } from "react";
import "./Header.css";
import { AiOutlineBars } from "react-icons/ai";
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {AiOutlineScan} from 'react-icons/ai'
import {BiBuildingHouse,BiUser,BiLogOut} from 'react-icons/bi'
import {TbReportAnalytics} from 'react-icons/tb'

function Header() {
  const [side, setSide] = useState(false);
  const clickside = () => {
    setSide(!side);
  };
  return (
    <div>
      <div className={side ? "bg-overlay  " : "bg-overlay active"}></div>
      <div className="navhead">
        <div className="nav iconbar icon col-1 " onClick={clickside}>
          <AiOutlineBars className="iconbar2" />
        </div>
        <div className="nav headname col ">ระบบตรวจสอบครุภัณฑ์</div>
      </div>
      {/*  SidebarNav  */}

      <div className={side ? "sidebar active" : "sidebar"}>
        <div className="open-icon icon" onClick={clickside}>
          <AiOutlineBars />
        </div>
        <div className="group-nav " >
          <div className="item"><HiOutlineDesktopComputer className="ms" /> &nbsp; ครุภัณฑ์</div>
          <div className="item"><AiOutlineScan className="ms" />&nbsp; สแกน</div>
          <div className="item"><BiBuildingHouse className="ms" />&nbsp; หน่วยงาน</div>
          <div className="item"><BiUser className="ms"/>&nbsp; เจ้าหน้าที่</div>
          <div className="item"><TbReportAnalytics className="ms"/>&nbsp; ออกรายงาน</div>
          <div className="item logout"><BiLogOut className="ms" />&nbsp; ออกจากระบบ</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
