import React from "react";
import "./StyleScanPage.css";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";
function ScanPageFnc() {
  const [cc, setCc] = useState(1);
  const onCode=()=>{
    setCc(cc+1)
  }
  
 
  return (
    <div className=" scan">
      <div className="h-100 w-100">
        <div className="d-flex flex-column gap-5  justify-content-start pt-5 align-items-center h-100">
          <NavLink to="/scancheck" className="Menu text-center check-scan  ">
            <div className="scan-icon checki">
              <MdOutlineQrCodeScanner  count={onCode} cc={cc} />
            </div>
            <div className="text-scan fw-bolder">ตรวจสอบครุภัณฑ์</div>
          </NavLink>
          <NavLink to="/scanupdate" className="Menu text-center update-scan ">
            <div className="scan-icon updatei">
              <MdOutlineQrCodeScanner />
            </div>
            <div className="text-scan fw-bolder">อัพเดทข้อมูล</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ScanPageFnc;
