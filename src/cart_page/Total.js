import React, { useEffect, useState } from "react";

function Total(props) {
  const { data, items } = props;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let subTotal = 0;
    data.forEach((element) => {
      items.forEach((item) => {
        item.itemId.toString() === element.Id.toString() &&
          (subTotal += item.quantity * element.Price);
      });
    });
    setTotal(subTotal.toFixed(2));
  }, [items, data]);

  return <h5>Total: ${total}</h5>;
}

export default Total;
