//App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import HomePage from "./Pages/HomePage";
import Cart from "./pages/Cart";
// import CardItems from "./Components/CardItems";
import Home from "./Home";
import LoginPage from "./LoginPage"
import ProductPage from "./ProductPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/Allcard/:id" element={<ProductPage/>} />
        <Route path="/CircleIcon" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
