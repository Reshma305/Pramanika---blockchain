import React from "react";
import ReactDOM from "react-dom/client";
import ConsumerPage from "./components/pages/ConsumerPage.tsx";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ConsumerPage />
  </React.StrictMode>
);
