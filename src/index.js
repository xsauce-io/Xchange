import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Markets } from "./components/templates/Markets";
import { NotFound } from "./components/templates/NotFound";
import { Portfolio } from "./components/templates/Portfolio";
import { Product } from "./components/templates/Product";
import { Swaps } from "./components/templates/Swaps";
import { Xchange } from "./components/templates/Xchange";
import { Xhibit } from "./components/templates/Xhibit";
import { Xvault } from "./components/templates/Xvault";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// require("dotenv").config();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Xvault />} />
          <Route path="xchange" element={<Xchange />}>
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="markets" element={<Markets />} />
            <Route path="markets/:category" element={<Markets />} />
            <Route path="markets/:category/:productId" element={<Product />} />
            <Route path="swaps" element={<Swaps />} />
            <Route index element={<Portfolio />} />
          </Route>
          <Route path="xhibit" element={<Xhibit />} />
          <Route path="xvault" element={<Xvault />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
