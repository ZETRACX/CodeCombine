import React from "react";
import CodeCombine from "./CodeCombine";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./navbar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code" element={<CodeCombine />} />
      </Routes>
    </div>
  );
};

export default App;
