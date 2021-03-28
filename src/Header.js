import React, { useState, useEffect } from "react";
import "./Header.css";
import Home from "./home_page/Home";
import Cart from "./cart_page/Cart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  const [count, setCount] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);

  useEffect(() => {
    let itemCount = 0;
    itemsInCart.forEach((item) => (itemCount += item.quantity));
    setCount(itemCount);
  }, [itemsInCart]);

  function handleAddToCart(e) {
    let itemId = e.target.attributes.itemID.value;
    let updatedItems = [...itemsInCart];
    let index = updatedItems.findIndex((item) => itemId === item.itemId);

    index === -1
      ? (updatedItems = [...updatedItems, { itemId: itemId, quantity: 1 }])
      : (updatedItems[index].quantity += 1);
    setItemsInCart(updatedItems);
  }

  function updateItems(items) {
    setItemsInCart(items);
  }
  return (
    <Router>
      <div className="header">
        <h3>Stationery Shop</h3>
        <div className="header-right">
          <Link to="/">Home </Link>
          {/* need to add funtion changing the amount in cart */}
          <Link to={`${process.env.PUBLIC_URL}/cart`}>Cart ({count})</Link>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home addToCart={handleAddToCart} />
        </Route>

        <Route path={`${process.env.PUBLIC_URL}/cart`}>
          <Cart updateItems={updateItems} itemsInCart={itemsInCart} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;
