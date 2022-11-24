import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function App() {
  const [link, setLink] = useState("");

  useEffect(() => {
    let html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    );
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    function onScanSuccess(decodedText, decodedResult) {
      // handle the scanned code as you like, for example:
      setLink(decodedResult.decodedText);
      console.log(`Code matched = ${decodedText}`, decodedResult);
    }

    function onScanFailure(error) {
      try {
        if(error){
          return 0;
        }
        // handle scan failure, usually better to ignore and keep scanning.
        // for example:
      } catch (err) {
        // console.warn(`Code scan error = ${error}`);
      }
    }
  }, [link]);
  return (
    <>
      <div id="reader" width="600px"></div>
    </>
  );
}

export default App;
