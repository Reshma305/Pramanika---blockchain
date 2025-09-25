import React from "react";

interface QRScannerProps {
  onScanSuccess: (decodedText: string) => void;
}

const QRScanner: React.FC<QRScannerProps> = ({ onScanSuccess }) => {
  return (
    <div>
      <p>Mock QR Scanner</p>
      <button onClick={() => onScanSuccess("batch123")}>Scan QR</button>
    </div>
  );
};

export default QRScanner;
