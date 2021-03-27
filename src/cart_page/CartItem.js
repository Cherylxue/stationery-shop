import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
function CartItem(props) {
  const [itemInfo, setItemInfo] = useState({});

  useEffect(() => {
    // console.log(props.data);
    props.data.forEach((element) => {
      if (element.Id.toString() === props.itemId && props.quantity > 0) {
        setItemInfo(element);
      }
    });
  }, [props.quantity]);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`./img_src/${itemInfo.Id}.png`} />
      <Card.Body>
        <Card.Title>{itemInfo.Name}</Card.Title>
        <h5>Price: ${itemInfo.Price}</h5>
        <label>Quantity: {props.quantity}</label>
        <Button variant="secondary" onClick={props.add} itemID={props.itemId}>
          +
        </Button>
        <Button
          variant="secondary"
          onClick={props.subtract}
          itemID={props.itemId}
        >
          -
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
