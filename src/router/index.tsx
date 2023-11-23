// src/router/index.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Opening from "../components/opening.tsx";

function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="page1" element={<Opening />} />
      </Routes>
    </Router>
  );
}

export default RouterApp;
