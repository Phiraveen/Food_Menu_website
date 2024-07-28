import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoMdPlanet } from "react-icons/io";
import { CartContextCreate } from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Header() {
  const { cart } = useContext(CartContextCreate);

  const getcartnotifications = () => {
    let totalcartItems = 0;
    for(let i in cart){
      totalcartItems = totalcartItems + cart[i];
    }
    return totalcartItems;
  }

  return (
    <div className="mainContainer">
      <div className="mainName">
        <Link to="/">
          <h2>Food Planet</h2>
        </Link>
        <IoMdPlanet className="planetIcon" />
      </div>

      <div className="LinkbuttonsCont">
        <Link to="/">
          <Button variant="success">Menu</Button>
        </Link>
        <Link to="/Cart">
          <ButtonGroup>
            <Button variant="dark">{getcartnotifications()}</Button>
            <Button variant="warning">View Cart</Button>
          </ButtonGroup>
        </Link>
      </div>
    </div>
  );
}
