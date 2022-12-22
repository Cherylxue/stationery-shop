import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Cart.css";

function CartItem(props) {
  const [itemInfo, setItemInfo] = useState({});
  const { data, itemId, quantity } = props;

  useEffect(() => {
    // console.log(props.data);
    data.forEach((element) => {
      if (element.Id.toString() === itemId && quantity > 0) {
        setItemInfo(element);
      }
    });
  }, [quantity, data, itemId]);

  return (
    <div className="cart-item-info">
      <img
        className="check-out-image"
        src={`./img_src/${itemInfo.Id}.png`}
        alt={`${itemInfo.Id}`}
      ></img>
      <div>
        <h6 className="cart-item-name">{itemInfo.Name}</h6>
        <h6>Price: ${itemInfo.Price}</h6>
        <label className="item-quantity">Quantity: {quantity}</label>
        <Button
          variant="quantity-modifier"
          onClick={props.add}
          itemID={props.itemId}
        >
          +
        </Button>
        <Button
          variant="quantity-modifier"
          onClick={props.subtract}
          itemID={itemId}
        >
          -
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
