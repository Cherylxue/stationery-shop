import React, { useState } from "react";
import "./Header.css";
import Home from "./home_page/Home";
import Cart from "./cart_page/Cart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header(props) {
  const [count, setCount] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);
  function handleAddToCart(e) {
    let itemId = e.target.attributes.itemID.value;
    setCount(count + 1);
    setItemsInCart([...itemId]);
    console.log(itemsInCart);
  }
  return (
    <Router>
      <div className="header">
        <h3>Stationery Shop</h3>
        <div className="header-right">
          <Link to="/">Home </Link>
          {/* need to add funtion changing the amount in cart */}
          <Link to="/cart">Cart ({count})</Link>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home addToCart={handleAddToCart} />
        </Route>

        <Route path="/cart">
          <Cart cartNum={count} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;
