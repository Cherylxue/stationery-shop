import React from "react";
import CartItems from "./CartItems";
import CheckOut from "./CheckOut";

function Cart(props) {
  return (
    <div>
      <CartItems />
      <h4>Total:</h4>
      <CheckOut />
    </div>
  );
}

export default Cart;
