import React, { useState, useEffect, useRef, useCallback } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Badge, Button, Pane } from "evergreen-ui";
import "./test.css";
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
function TestValidate(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.id;
  const nameEvent = location.state.data;
  const [event, setEvent] = useState(null);
  console.log("This is Props", props);
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
  const onSuccess = () => {
    Swal.fire("Any fool can use a computer").then((respons) => {
      return;
    });
  };
  const onScanSuccess = async (decodedText, decodedResult, existingCodes) => {
    if (decodedText.length) {
      const urll = window.location.origin;
      // alert(urll+"/product")
      const promise = decodedText.slice(0, 4);
      return stopCammera(decodedText);
      // (window.location.href = urll + event);

      // navigate(event, { state: { id: decodedText } });
    } else {
      alert("1234");
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
  const stopCammera = (val) => {
    console.log("stopCammera");
    return htmlQrCodeRef.current
      ?.stop()
      .then(() => {
        // console.log("$$$", htmlQrCodeRef.current);
        htmlQrCodeRef.current = null;
        setCameraOnFlag(false);
      })
      .then((v) => {
        if(val.length){
           navigate("/check", { state: { id: val } });
        }else{
          navigate('/scanpage')
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
            color="green"
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

export default TestValidate;
