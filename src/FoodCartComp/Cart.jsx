import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { CartContextCreate } from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { GrCart } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import data from "./data";

export default function Cart() {
  const { cart, handleAddButton, handleRemoveButton } = useContext(CartContextCreate);
  const [Totalamts, setTotalamts] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    let Totalamt = 0;
      for(let i of data){
        if(cart[i.id]>0){
          Totalamt = Totalamt + (cart[i.id] * (parseInt(i.amt)));
        }
      }
      setTotalamts(Totalamt);
  },[cart]);

  return (
    <div className="cartContainer">
      {data.map((pr, i) => {
        if(cart[pr.id] > 0){
          return(
            <div className="cartEachCont" key={i}>
            <div className="cartEachProduct" key={i}>
          <div className="imgnameprice">
            <img src={pr.image} alt={pr.name} />
            <div className="nameandPrice">
              <p className="Cname">{pr.name}</p>
              <p className="Cprice">Price Rs.{pr.amt}</p>
            </div>
          </div>

          <ButtonGroup>
            <Button onClick={() => handleRemoveButton(pr)} variant="danger">-</Button>
            <Button variant="warning">{cart[pr.id]}</Button>
            <Button onClick={() => handleAddButton(pr)} variant="success">+</Button>
          </ButtonGroup>

        </div>
        </div>
          );
        }
})}

     {Totalamts>0 ?(<div className="totalprice">
        <h3>Total Price - Rs.{Totalamts}</h3>
      </div>):(<div className="totalprice">
        <h3>Your Cart is Empty</h3>
        <div className="cartIcon"><GrCart/></div>
      </div>)}

      
    <div className="gotomenubutton">
      <div><Button variant="warning" onClick={() => navigate("/")}>Go to Menu</Button></div>
      <div><Button variant="warning">Checkout</Button></div>
    </div>
      </div>
  );
}
