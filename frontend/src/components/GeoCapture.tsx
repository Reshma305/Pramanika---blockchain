import React, { useState } from "react";

export const GeoCapture = () => {
  const [file, setFile] = useState<File | null>(null);
  const [cid, setCid] = useState("");

  const handleUpload = async () => {
    if (file) {
      console.log("Mock IPFS upload for", file.name);
      setCid("mockCID12345");
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload}>Upload Photo</button>
      {cid && <p>Uploaded CID: {cid}</p>}
    </div>
  );
};
