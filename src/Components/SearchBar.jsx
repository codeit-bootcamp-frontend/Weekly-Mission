import searchIcon from "../assets/images/search-icon.png";
import "../assets/stylesheets/SearchBar.css";

function SearchBar() {
  return (
    <>
      <div className="search-bar">
        <input
          id="search-input"
          type="text"
          placeholder="원하는 링크를 검색해 보세요"
        ></input>
        <img className="search-icon" src={searchIcon}></img>
      </div>
    </>
  );
}

export default SearchBar;
