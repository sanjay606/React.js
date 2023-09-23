//App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import HomePage from "./Pages/HomePage";
import Cart from "./pages/Cart";
// import CardItems from "./Components/CardItems";
import Home from "./Home";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;