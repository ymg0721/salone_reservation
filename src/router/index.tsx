// src/router/index.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Opening from "../pages/opening";
import Home from "../pages/home";

function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default RouterApp;
