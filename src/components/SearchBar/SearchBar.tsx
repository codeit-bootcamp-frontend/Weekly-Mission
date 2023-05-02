import styled from "styled-components";

interface searchBarProps {
  action: string;
  placeholder?: string;
}

const SearchBar = ({ action, placeholder = "검색하세요" }: searchBarProps) => {
  return (
    <SSearchForm className="search-form" action={action}>
      <label>
        <div className="search-icon-box">
          <img src="assets/images/search-icon.png" alt="search icon" />
        </div>
        <input
          className="search-input"
          type="search"
          name="q"
          placeholder={placeholder}
        />
      </label>
    </SSearchForm>
  );
};

const SSearchForm = styled.form`
  position: relative;

  .search-icon-box {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 1rem;
    height: 1rem;
  }

  .search-icon-box img {
    display: block;
    width: 100%;
    height: auto;
  }

  .search-input {
    font-size: 1rem;
    line-height: 1.125rem;
    width: 100%;
    padding: 0.9375rem 2.635rem;
    border: none;
    background-color: #f5f5f5;
    border-radius: 10px;
  }
`;
export default SearchBar;
