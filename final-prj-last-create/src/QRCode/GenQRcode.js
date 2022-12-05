import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { QRCode } from "react-qrcode-logo";
import './Qr.css'
import logoQr from '../Image/LOGO RGB PNG-สำหรับงานนำเสนอแบบดิจิติล.png'

function GenQRcode(props) {
  const printRef = useRef();
  const Dow = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = data;
      link.download = `${props.id}.png`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
  return (
    // <>

    <>
      <div ref={printRef}>
        <div className="flex-column align-items-center d-flex justify-content-center canvas ">
          <QRCode logoImage={logoQr} logoWidth='50' size='220' value={props.id} />
          <h5 className="fw-bold"> {props.id}</h5>
        </div>
      </div>
      <div className="grid  text-center">
         <div  onClick={Dow} className="  btn btn-primary btn-sm">
        Dowload
      </div>
      </div>
     
    </>
  );
}

export default GenQRcode;
