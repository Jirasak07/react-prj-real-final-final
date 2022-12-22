import React, { useState, useEffect, useRef, useCallback } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Badge, Button, Pane } from "evergreen-ui";
import "./StyleScanPage.css";
import logo from "../../Image/QR_Code01.png";
const config = {
  fps: 10,
  qrbox: {
    width: 250,
    height: 250,
  },
  aspectRatio: 1.0,
};
const MySwal = withReactContent(Swal);
function ScanQR(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.id;
  const nameEvent = location.state.data;
  const [event, setEvent] = useState(null);

  console.log("This is Location", location);

  console.warn();
  const [scannedCodes, setScannedCodes] = useState([]);
  const [cameraId, setCameraId] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [isCameraOn, setCameraOnFlag] = useState(false);
  const htmlQrCodeRef = useRef(null);
  ///////////////////////////
  const initCammera = () => {
    Html5Qrcode.getCameras()
      .then((devices) => {
        // console.log("Inside getCameras", devices);
        if (devices && devices.length) {
          // console.log("### getCameras", devices);
          const backCamera =
            devices.find((device) => device?.label.includes("Back")) ||
            devices[1];
          const camera = backCamera || devices[1] || devices[0];
          console.log("##", camera);
          const cameraId = backCamera ? backCamera.id : devices[0].id;

          // console.log("Inside getCameras if", htmlQrCodeRef.current);
          htmlQrCodeRef.current = new Html5Qrcode("reader", {
            verbose: true,
          });
          setCameraId(camera.id);
          setCameraOnFlag(true);
        }
      })
      .catch((err) => {
        // console.log("getCammera", err);
      });
  };
  //////////////////////////
  const onScanSuccess = async (decodedText, decodedResult, existingCodes) => {
    if (decodedText.length) {
      const urll = window.location.origin;
      // alert(urll+"/product")
      const promise = decodedText.slice(0, 4);
      const yesno = true;
      if (promise === "KPRU") {
        return stopCammera(decodedText, yesno, promise);
      } else {
        return stopCammera(decodedText, yesno, promise);
      }

      // (window.location.href = urll + event);

      // navigate(event, { state: { id: decodedText } });
    } else {
      ///////////////
    }
    console.warn(existingCodes);
    // handle the scanned code as you like, for example:
    // console.log(`Code matched = ${decodedText}`, decodedResult);
    // setScannedCodes(existingCodes.concat([{ decodedText, decodedResult }]));
  };
  const onScanFailure = (error) => {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    const path = window.location.pathname;
    console.log(path);
    if (path != "/test") {
      stopCammera();
    }

    setTimeout(() => {
      console.warn(`Code scan error = ${error}`);
    }, 2000);
  };
  const startCamera = () => {
    htmlQrCodeRef.current
      .start(
        //  { facingMode: { exact: "user" } },
        { deviceId: { exact: cameraId } },
        config,
        (decodedText, decodedResult) =>
          onScanSuccess(decodedText, decodedResult, scannedCodes),
        onScanFailure
      )
      .then(() => {
        // console.log("instance###", htmlQrCodeRef?.current);
        // htmlQrCodeRef?.current?.context?.scale(1.5, 1.5);
        // htmlQrCodeRef?.current?.context?.translate(-64, -36);
        // console.log(htmlQrCodeRef.current.getRunningTrackCapabilities());
      })
      .catch((err) => {
        // Start failed, handle it.
        // console.log("err", err);
      });
  };
  const stopCammera = (val1, val2, val3) => {
    console.log("stopCammera");
    return htmlQrCodeRef.current
      ?.stop()
      .then(() => {
        // console.log("$$$", htmlQrCodeRef.current);
        htmlQrCodeRef.current = null;
        setCameraOnFlag(false);
      })
      .then((v) => {
        if (val1.length && val3 === "KPRU") {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${nameEvent}ครุภัณฑ์หมายเลข ${val1}`,
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          }).then((res) => {
            navigate("/check", { state: { id: val1 } });
          });
        } else if (val2 === true) {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "ไม่ใช่ QRCode ของระบบ",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          }).then((res) => {
            initCammera();
          });
        } else {
          navigate(-1);
        }
      });
  };
  useEffect(() => {
    // console.log("useEffect", cameraId, htmlQrCodeRef.current);

    if (htmlQrCodeRef.current && isCameraOn) {
      // console.log("Calling start");

      startCamera();
    }
  }, [isCameraOn]);
  useEffect(() => {
    const idScan = data;
    if (idScan === "1") {
      setEvent("/check");
    } else if (idScan === "2") {
      setEvent("/update");
    }
    initCammera();
  }, []);

  return (
    <div className="pt-3">
      <Pane className="d-flex flex-column align-items-center top-scan  ">
        <Pane
          minHeight={320}
          width="320px"
          padding="10px"
          backgroundColor="white"
          className=" rounded"
          elevation={2}
        >
          <img src={logo} className="img-scan" />
          <div id="reader"></div>
        </Pane>

        {/* <button onClick={initCammera}>Start</button> */}
        <div className="d-flex flex-column align-items-center gap-3 mt-3 ">
          <Badge
            className="fs-5 d-flex justify-content-center align-items-center fw-bolder "
            height="50px"
            color={data == "1" ? "purple" : "yellow"}
            isInteractive
          >
            {" "}
            สแกนเพื่อ{nameEvent}ครุภัณฑ์
          </Badge>

          <Button appearance="primary" intent="danger" onClick={stopCammera}>
            ย้อนกลับ
          </Button>
        </div>
      </Pane>
    </div>
  );
}

export default ScanQR;
