import React, { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import "./App.css";
import imqr from "./image/QR_Code01.png";
let html5QrCode;
const config = {
  fps: 10,
  qrbox: {
    width: 300,
    height: 300,
  },
  aspectRatio: 1.0,
};
function App() {
  const navigate = useNavigate();
  const [link, setLink] = useState("");
  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    setLink(decodedText);
    console.log("from Qr const", decodedText);
    window.location.href = decodedText;
  };

  const handleStop = () => {
    try {
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    Html5Qrcode.getCameras().then((devices) => {
      html5QrCode = new Html5Qrcode("reader");
      if (devices && devices.length) {
        var cameraId = devices[0].id;
        if (isMobile) {
          html5QrCode.start(
            { facingMode: { exact: "user" } },
            // { facingMode: { exact: "environment" } },
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
  // This method will trigger user permissions

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
              <div>เพื่อจัดการครุภัณฑ์</div>
            </div>
            <div className="btn btn-danger">ย้อนกลับ</div>
          </div>  
        </>
      ) : (
        <>For Mobile</>
      )}
    </>
  );
}

export default App;
