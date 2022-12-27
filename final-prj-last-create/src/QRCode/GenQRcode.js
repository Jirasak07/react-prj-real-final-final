import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { QRCode } from "react-qrcode-logo";
import "./Qr.css";
import logoQr from "../Image/LOGO RGB PNG-สำหรับงานนำเสนอแบบดิจิติล.png";
import { Button } from "evergreen-ui";
import { DownloadIcon } from 'evergreen-ui'

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
          <QRCode
            logoImage={logoQr}
            logoWidth="50"
            size="220"
            value={props.id}
          />
          <h5 className="fw-bold"> {props.id}</h5>
        </div>
      </div>
      <div className="grid  text-center">
        <Button onClick={Dow} appearance="primary" iconBefore={DownloadIcon} intent="success">
          {" "}
          ดาวน์โหลด{" "}
        </Button>
      </div>
    </>
  );
}

export default GenQRcode;
