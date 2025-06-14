import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomeLayouts from "./layouts/HomeLayouts";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomeLayouts/>
  </StrictMode>
);
