import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Core from "./components/organisms/Core";
import Markets from "./components/templates/Markets";
import NotFound from "./components/templates/NotFound";
import Portfolio from "./components/templates/Portfolio";
import Product from "./components/templates/Product";
import Products from "./components/templates/Products";
import Swaps from "./components/templates/Swaps";
import Xchange from "./components/templates/Xchange";
import Xhibit from "./components/templates/Xhibit";
import Xvault from "./components/templates/Xvault";
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
          <Route path="/xchange" element={<Xchange />}>
            <Route path="/xchange/portfolio" element={<Portfolio />} />
            <Route path="/xchange/markets/" element={<Markets />}>
              <Route path="/xchange/markets/:category" element={<Products />} />
            </Route>
            <Route
              path="/xchange/markets/:category/:productId"
              element={<Product />}
            />
            <Route path="/xchange/swaps" element={<Swaps />} />
            <Route index element={<Core />} />
          </Route>
          <Route path="/xhibit" element={<Xhibit />} />
          <Route path="/xvault" element={<Xvault />} />
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
