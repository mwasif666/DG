import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Github from "./components/Github";

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userID" element={<User />} />
        <Route path="Github" element={<Github />} />
      </Routes>
    </Router>
  );
};

export default Routing;
