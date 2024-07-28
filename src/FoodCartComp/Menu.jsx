import React, { useContext, useState } from "react";
import "./Menu.css";
import data from "./data";
import { CartContextCreate } from "../Context/CartContext";

function Menu() {
  const [menu, setmenu] = useState(data);
  const [filteredMenu, setfilteredMenu] = useState(menu);
  const { cart, handleAddButton } = useContext(CartContextCreate);

  const category = menu.map((men) => men.category);

  const uniqueCategory = [...new Set(category)];
  uniqueCategory.unshift("All");

  const handleClick = (e) => {
    if (e.target.innerHTML == "All") {
      setfilteredMenu(menu);
    } else {
      const newArr = menu.filter((bb) => bb.category == e.target.innerHTML);
      setfilteredMenu(newArr);
    }
  };

  return (
    <div className="mainCont">
      <div className="headCont">
        <h1>Our Menu's</h1>
        <div>
          {uniqueCategory.map((aa, i) => (
            <button key={i} onClick={handleClick} className="btn btn-info m-3">
              {aa}
            </button>
          ))}
        </div>
      </div>

      <div className="outputCont">
        {filteredMenu.map((men, i) => (
          <div key={i} className="eachFood">
            <img src={men.image} />
            <p className="namePara">{men.name}</p>
            <p className="pricePara">Price Rs.{men.amt}</p>
              <button
                onClick={() => handleAddButton(men)}
                className="btn btn-warning"
              >
                Add to Cart {cart[men.id] > 0 && <span>({cart[men.id]})</span>}
              </button>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
