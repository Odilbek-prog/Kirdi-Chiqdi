import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Jobs from "../Pages/Jobs";
import Services from "../Pages/Services";
import Allvideos from "../Pages/Allvideos";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/allvideos" element={<Allvideos />} />
    </Routes>
  );
};

export default Router;
