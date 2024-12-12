import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WorkHistory from "./Screens/History";
import BookedWork from "./Screens/BookedWork";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
