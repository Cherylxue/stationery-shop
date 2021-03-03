import React from "react";
import "./Header.css";
import Home from "./home_page/Home";
import Cart from "./cart_page/Cart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header(props) {
  return (
    <Router>
      <div className="header">
        <h3>Stationery Shop</h3>
        <div className="header-right">
          <Link to="/">Home </Link>
          {/* need to add funtion changing the amount in cart */}
          <Link to="/cart">Cart 0</Link>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;
