import Carousels from "./Carousels";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Items from "./Items";
import "./Home.css";

function Home(props) {
  return (
    <>
      <h5>This is promo information</h5>
      <Carousels />
      <div className="search-bar">
        <SearchBar />
      </div>

      <div className="item-result-container">
        <NavBar />
        <Items />
      </div>
    </>
  );
}

export default Home;
