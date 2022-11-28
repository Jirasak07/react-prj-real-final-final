import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { GoDeviceMobile } from "react-icons/go";
import { NavLink } from "react-router-dom";
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import "./StyleScanner.css";
function Scan() {
  const [modalSingle, setModalSingle] = useState(false);
  const toggleSingle = () => {
    setModalSingle(!modalSingle);
  };
  const [chk, setChk] = useState(true);
  useEffect(() => {
    if (isMobile === false) {
      setChk(false);
    } else if (isMobile === true) {
      setChk(true);
    }
    console.log(chk);
  });
  const Check = () => {
    setModalSingle(!modalSingle);
  };
  const Update = () => {};
  return (
    <>
      {chk ? (
        <>
          {" "}
          <div className="container scan text-white">
            <div className="choo">เลือกรูปแบบการสแกน</div>

            <NavLink className="check text-success col-6-sm" to="/scan-check">
              ตรวจสอบครุภัณฑ์
            </NavLink>

            <NavLink onClick={Update} className="update text-primary col-6-sm" to="/scan-update" >
              อัพเดทครุภัณฑ์
            </NavLink>
          </div>
        </>
      ) : (
        <>
          <div className="err text-white ">
            <div>
              <GoDeviceMobile />
            </div>
            <div>For Mobile</div>
          </div>
        </>
      )}
    </>
  );
}

export default Scan;
