import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Header from "./components/Header/Header";
import Chefs from "./routes/chefs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Chefs />} />
        <Route path="chefs" element={<Chefs />} />
        <Route path="update" element={<Chefs />} />
        <Route path="delete" element={<Chefs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
