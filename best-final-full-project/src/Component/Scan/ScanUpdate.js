import React, { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { NavLink, useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import imqr from "../../image/QR_Code01.png";
import "./StyleScanner.css";
let html5QrCode;
const config = {
  fps: 10,
  qrbox: {
    width: 300,
    height: 300,
  },
  aspectRatio: 1.0,
};
function ScanCheck() {
  const navigate = useNavigate();
  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    console.log("from Qr const", decodedText);
    window.location.href = decodedText;
  };
  const handleStop = () => {
    html5QrCode.stop().then((ignore) => {
      // QR Code scanning is stopped.
    }).catch((err) => {
      // Stop failed, handle it.
    });
  };
  useEffect(() => {
    Html5Qrcode.getCameras().then((devices) => {
      html5QrCode = new Html5Qrcode("reader");
      if (devices && devices.length) {
        var cameraId = devices[0].id;
        if (isMobile) {
          html5QrCode.start(
            { deviceId: { exact: cameraId } },
            config,
            qrCodeSuccessCallback
          );
          return;
        } else {
          html5QrCode.start(
            { facingMode: { exact: "user" } },
            config,
            qrCodeSuccessCallback
          );
        }
      }
    });
  });
  return (
    <>
      {isMobile ? (
        <>
          {" "}
          <div className="bg">
            <div className="Scanner">
              <img src={imqr} className="image" />
              <div id="reader"></div>
            </div>
            <div className="btext">
              <div>สแกน QR Code </div>
              <div>เพื่ออัพเดทครุภัณฑ์</div>
            </div>
            <NavLink className="btn btn-danger" onClick={handleStop} to="/scan">
              ย้อนกลับ
            </NavLink>
          </div>
        </>
      ) : (
        <>For Mobile</>
      )}
    </>
  );
}

export default ScanCheck;
