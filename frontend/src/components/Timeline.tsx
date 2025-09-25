import React from "react";

interface TimelineProps {
  batchData: any;
}

const Timeline: React.FC<TimelineProps> = ({ batchData }) => {
  return (
    <div>
      <h3>Timeline for {batchData.id}</h3>
      <p>Blockchain Verified: ✅</p>
      <p>Photo CID: {batchData.photoCid}</p>
    </div>
  );
};

export default Timeline;
