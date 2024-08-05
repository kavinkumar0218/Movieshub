import React from "react";
import Home from "./Pages/Homes/Home";
import { Login } from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blockbuster from "./Blockbuster/Blockbuster";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/movies" element={<Blockbuster />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
