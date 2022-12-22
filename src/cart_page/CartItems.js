import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

function CartItems(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let updatedItems = [...props.items];
    updatedItems = updatedItems.filter((item) => item.quantity > 0);
    setItems(updatedItems);
  }, [props.items]);

  return (
    <>
      {items.length === 0 ? (
        <h6>Cart is empty</h6>
      ) : (
        <div className="cart-items-container">
          {items.map((item) => (
            <CartItem
              key={items.indexOf(item)}
              itemId={item.itemId}
              quantity={item.quantity}
              data={props.data}
              add={() => props.handleAdd(item.itemId)}
              subtract={() => props.handleSubtract(item.itemId)}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default CartItems;
