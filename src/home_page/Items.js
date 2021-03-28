import React from "react";
import Item from "./Item";
import "./Item.css";

function Items(props) {
  const { data } = props;

  return (
    <>
      <div className="items-container">
        {data.map((item) => (
          <Item
            key={data.indexOf(item)}
            itemName={item.Name}
            itemPrice={item.Price}
            imgSrc={`${process.env.PUBLIC_URL}/img_src/${item.Id}.png`}
            itemId={item.Id}
            addToCart={props.addToCart}
          />
        ))}
      </div>
    </>
  );
}
export default Items;
