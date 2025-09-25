import * as functions from "firebase-functions";

export const pinToIPFS = functions.https.onCall(async (data, context) => {
  console.log("Mock pinToIPFS called", data);
  return { cid: "mockCID12345" };
});

export const relayOnChain = functions.https.onCall(async (data, context) => {
  console.log("Mock relayOnChain called", data);
  return { success: true, transactionHash: "0xmockTxHash", batchId: 1 };
});
