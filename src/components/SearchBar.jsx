import React from "react";
import styled from "styled-components";
import lensIcon from "@assets/images/search-bar-lens-icon.svg";

const SearchBar = () => {
  return (
    <SearchWrap>
      <SearchLensIcon alt="search lens icon" src={lensIcon} />
      <SearchBarInput placeholder="원하는 링크를 검색해 보세요" />
    </SearchWrap>
  );
};

export default SearchBar;

const SearchWrap = styled.div`
  position: relative;
`;

const SearchBarInput = styled.input`
  max-width: 106rem;
  width: 100%;
  height: 5.4rem;
  padding: 1.5rem 0rem 1.5rem 4.2rem;
  margin: 4rem auto;
  background: #f5f5f5;
  border: none;
  border-radius: 1rem;
  outline: none;
`;

const SearchLensIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  left: 1.6rem;
`;
