import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/main-page";
import ReponsiveProvider from "./context/responsive-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ReponsiveProvider>
    <MainPage />
  </ReponsiveProvider>
);
