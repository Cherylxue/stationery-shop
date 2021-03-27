import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Item.css";

function Item(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.itemName}</Card.Title>
        <h5 className="item-name">${props.itemPrice}</h5>
        <Button
          className="add-to-cart-btn"
          onClick={props.addToCart}
          itemID={props.itemId}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
