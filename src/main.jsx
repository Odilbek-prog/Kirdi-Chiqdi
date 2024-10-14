import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./i18next.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ToastContainer />
      <App />
    </StrictMode>
  </BrowserRouter>
);
