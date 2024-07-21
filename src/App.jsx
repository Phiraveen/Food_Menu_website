import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./FoodCartComp/Header.jsx";
import Footer from "./FoodCartComp/Footer.jsx";
import Menu from "./FoodCartComp/Menu.jsx";
import Cart from "./FoodCartComp/Cart.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContext from "./Context/CartContext.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContext>
          <Header />
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
          <Footer />
        </CartContext>
      </BrowserRouter>
    </>
  );
}

export default App;
