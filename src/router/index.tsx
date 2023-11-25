// src/router/index.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Opening from "../pages/opening";
import Home from "../pages/home";
import List from "../pages/list";
import Reservation from "../pages/reservation";
import Contact from "../pages/contact";

function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default RouterApp;
