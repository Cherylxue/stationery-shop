import React, { useState, useEffect } from "react";
import CartItems from "./CartItems";
import CheckOut from "./CheckOut";
import Total from "./Total";

function Cart(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([...props.itemsInCart]);

  useEffect(() => {
    fetch("./item_data.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res.items);
        setIsLoading(false);
        props.updateItems(items);
      });
  }, [items]);

  function handleAdd(id) {
    // let id = e.target.attributes.itemId.value;
    let newArr = [...items];
    let index = newArr.findIndex((item) => item.itemId === id);
    newArr[index].quantity += 1;
    setItems(newArr);
  }

  function handleSubtract(id) {
    let newArr = [...items];
    let index = newArr.findIndex((item) => item.itemId === id);
    newArr[index].quantity -= 1;
    setItems(newArr);
  }

  return (
    !isLoading && (
      <div>
        <CartItems
          items={items}
          data={data}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
        />
        <Total items={items} data={data} />
        <CheckOut />
      </div>
    )
  );
}

export default Cart;
