import searchImg from "../images/search.svg";
import "./SearchBar.css";

function SearchBar({ placeholder = "원하는 정보를 검색해 보세요" }) {
  return (
    <div className="input-container">
      <img src={searchImg} />
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default SearchBar;
