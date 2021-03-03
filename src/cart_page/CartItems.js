import React from "react";
import CartItem from "./CartItem";

function CartItems(props) {
  return (
    <div className="cart-items-container">
      <CartItem />
      <CartItem />
    </div>
  );
}

export default CartItems;
