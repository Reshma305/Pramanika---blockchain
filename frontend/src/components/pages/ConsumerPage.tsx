import React, { useState } from "react";
import QRScanner from "../components/QRScanner";
import Timeline from "../components/Timeline";

const ConsumerPage = () => {
  const [batchData, setBatchData] = useState<any>(null);

  const handleScanSuccess = (decodedText: string) => {
    setBatchData({ id: decodedText, photoCid: "mockCID12345" });
  };

  return (
    <div>
      <h1>Pramanika Demo</h1>
      {!batchData && <QRScanner onScanSuccess={handleScanSuccess} />}
      {batchData && <Timeline batchData={batchData} />}
    </div>
  );
};

export default ConsumerPage;
