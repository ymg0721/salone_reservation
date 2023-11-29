// src/router/index.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Opening from "../pages/opening";
import Home from "../pages/home";
import List from "../pages/list";
import Detail from "../pages/detail";
import Reservation01 from "../pages/reservation01";
import Reservation02 from "../pages/reservation02";
import Reservation03 from "../pages/reservation03";
import Reservation04 from "../pages/reservation04";
import Contact01 from "../pages/contact01";
import Contact02 from "../pages/contact02";
import Contact03 from "../pages/contact03";
import Contact04 from "../pages/contact04";

function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/detail" element={<Detail />} />
        <Route path="/reservation01" element={<Reservation01 />} />
        <Route path="/reservation02" element={<Reservation02 />} />
        <Route path="/reservation03" element={<Reservation03 />} />
        <Route path="/reservation04" element={<Reservation04 />} />
        <Route path="/contact01" element={<Contact01 />} />
        <Route path="/contact02" element={<Contact02 />} />
        <Route path="/contact03" element={<Contact03 />} />
        <Route path="/contact04" element={<Contact04 />} />
      </Routes>
    </Router>
  );
}

export default RouterApp;
