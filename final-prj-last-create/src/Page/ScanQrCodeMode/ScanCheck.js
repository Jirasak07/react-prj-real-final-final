import React, { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { isMobile } from "react-device-detect";
import imqr from "../../Image/QR_Code01.png";
import { NavLink } from "react-router-dom";
import { Button } from "evergreen-ui";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
let html5QrCode;
const config = {
  fps: 10,
  qrbox: {
    width: 300,
    height: 300,
  },
  aspectRatio: 1.0,
};
function ScanCheck(props) {
  const [chk, setChk] = useState(false);
  const nav = useNavigate();
  const onClick = () => {
    setChk(!chk);
  };
  ////////////////////////
  const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    console.log("from Qr const", decodedText);
    window.location.href = decodedText;
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
          {/* <div className="text-white" >{url}</div>  */}

          <div className="d-flex flex-column">
            <div className="Scanner">
              <img src={imqr} className="image2" />
              <div id="reader"></div>
            </div>
            <div className="btext">
              <div>สแกน QR Code </div>
              <div>เพื่อตรวจสอบครุภัณฑ์</div>
            </div>
            <div className="d-flex justify-content-center">
              <Button onClick={onClick} className="mt-2" intent="danger">
                Danger
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>For Mobile</>
      )}
    </>
  );
}

export default ScanCheck;
