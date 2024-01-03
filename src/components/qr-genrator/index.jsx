import { useState } from "react";
import QRCode from "react-qr-code";

const QrGenrator = () => {
  const [qrValue, setQrValue] = useState("");
  const [input, setInput] = useState("");

  const handleQrGenerator = () => {
    setQrValue(input);
    setInput("");
  };
  return (
    <div>
      <h1>Qr Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your name"
        />
        <button onClick={handleQrGenerator}>Generate</button>
      </div>
      <div>
        <QRCode id="qr-code-generator" value={qrValue} />
      </div>
    </div>
  );
};

export default QrGenrator;
