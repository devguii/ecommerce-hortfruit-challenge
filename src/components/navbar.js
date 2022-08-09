import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Frexco
        </span>
        <div className="carrinho" onClick={() => setShow(false)}>
          <span>
          <img src="../../public/cart-shopping-solid.svg" alt="carrinho"></img>
        </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
