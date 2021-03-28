import { Button } from "react-bootstrap";
import React, { useState } from "react";

function CheckOut(props) {
  const [isChecking, setIsChecking] = useState(false);

  function handleClick() {
    if (props.itemAmount === 0) {
      alert("No items in the cart!");
    } else {
      setIsChecking(true);
      setTimeout(() => {
        setIsChecking(false);
        alert("Check out successful!");
        props.clearCart();
      }, 1500);
    }
  }
  return (
    <>
      {isChecking ? (
        <Button disabled={true}>Checking Out...</Button>
      ) : (
        <Button onClick={handleClick}>Check Out</Button>
      )}
    </>
  );
}

export default CheckOut;
