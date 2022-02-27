import "./App.css";
import QRCode from "qrcode.react";
import React, { useState } from "react";
import downloadimg from './img/Download.png';
import linkedinlogo from './img/Linkedin.png';
import githublogo from './img/Github.png';
import maillogo from './img/Mail.png';
function App() {
  const [qr, setqr] = useState("");
  const handleEvent = (event) => setqr(event.target.value);
  const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('qrCodeEl')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL)
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  }

  return (
    <div id="App">
    <div className="b-s">

      <div className="title">
        <h1 className="heading">QR Code <span className="ab">Generator</span></h1>
      </div>
      <div className="main">
        <div className="url-sec">
          <input
            className="text"
            value={qr}
            placeHolder="Enter URL here"
            onChange={handleEvent}
          />
        </div>
        <div className="code">
          <QRCode id="qrCodeEl" value={qr} size={250} />
        </div>
        <div className="bnt">
          <button className="btn" onClick={downloadQRCode}>
            <img className="downloadImg" src={downloadimg} alt="download logo"/>
            Download
          </button>
        </div>
      </div>
      <div className="details">
        <p className="my-text">Developed By : Moin Bhokare
        </p>
        <a className="links" href="https://www.linkedin.com/in/moin-bhokare-722b601b0/"><img className="logo" src={linkedinlogo} alt="linkedin logo"/></a>
        <a className="links" href="https://github.com/bhokaremoin"><img className="logo" src={githublogo} alt="github logo"/></a>
        <a className="links" href="mailto:moinbhokare7@gmail.com"><img className="logo" src={maillogo} alt="maillogo"/></a>
      </div>
    </div>
    </div>
  );
}

export default App;
