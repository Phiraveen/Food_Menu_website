import React, { createContext, useState } from "react";
import data from "../FoodCartComp/data";

export const CartContextCreate = createContext(null);

const getDefaultCart = () => {
  let originalCart = {};
  for(let i=1; i< data.length + 1; i++){
    originalCart[i] = 0;
  }
  return originalCart;
}

export default function CartContext({ children }) {
  const [cart, setcart] = useState(getDefaultCart());

  const handleAddButton = (product) => {
    setcart((prev) => ({...prev, [product.id] : prev[product.id] + 1}));
  };

  const handleRemoveButton = (product) => {
    setcart((prev) => ({...prev, [product.id] : prev[product.id] - 1}));
  };

  return (
    <CartContextCreate.Provider
      value={{ cart, handleAddButton, handleRemoveButton }}
    >
      {children}
    </CartContextCreate.Provider>
  );
}
