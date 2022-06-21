import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
