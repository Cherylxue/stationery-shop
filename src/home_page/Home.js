import Carousels from "./Carousels";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Items from "./Items";
import React, { useEffect, useState } from "react";
import "./Home.css";

function Home(props) {
  const [data, setData] = useState([]);
  const [filterResult, setFilterResult] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/item_data.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.items);
        setFilterResult(res.items);
      });
  }, []);

  function handleClick(e) {
    if (e.target.type === "all") {
      setFilterResult(data);
    } else {
      const result = data.filter((item) => item.type === e.target.type);
      setFilterResult(result);
    }
  }

  return (
    <>
      <div className="home-container">
        <h5>This is promo information</h5>

        <Carousels />
        <div className="search-bar">
          <SearchBar />
        </div>

        <div className="item-result-container">
          <NavBar handleClick={handleClick} />
          <Items data={filterResult} addToCart={props.addToCart} />
        </div>
      </div>
    </>
  );
}

export default Home;
