import React, { createContext, useState } from "react";

export const CartContextCreate = createContext();

export default function CartContext({ children }) {
  const [cart, setcart] = useState([]);

  const handleAddButton = (product) => {
    setcart([...cart, product]);
  };

  const handleRemoveButton = (product) => {
    setcart(cart.filter((pr) => pr.id != product.id));
  };

  return (
    <CartContextCreate.Provider
      value={{ cart, handleAddButton, handleRemoveButton }}
    >
      {children}
    </CartContextCreate.Provider>
  );
}
