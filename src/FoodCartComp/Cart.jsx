import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { CartContextCreate } from "../Context/CartContext";
import Button from "react-bootstrap/Button";

export default function Cart() {
  const { cart, handleRemoveButton } = useContext(CartContextCreate);
  const [Totalamt, setTotalamt] = useState(0);

  useEffect(() => {
    setTotalamt(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart]);

  return (
    <div className="cartContainer">
      {cart.map((pr, i) => (
        <div className="cartEachProduct" key={i}>
          <div className="imgnameprice">
            <img src={pr.image} alt={pr.name} />
            <div className="nameandPrice">
              <p className="Cname">{pr.name}</p>
              <p className="Cprice">Price Rs.{pr.amt}</p>
            </div>
          </div>

          <Button onClick={() => handleRemoveButton(pr)} variant="danger">
            X
          </Button>
        </div>
      ))}
      <div className="totalprice">
        <h3>Total Price - Rs.{Totalamt}</h3>
      </div>
    </div>
  );
}
