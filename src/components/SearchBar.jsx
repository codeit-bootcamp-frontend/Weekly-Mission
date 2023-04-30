import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  border: 0;
  border-radius: 1rem;
  padding: 1.5rem;
  padding-left: 4.2rem;
  color: var(--search-bar-text);
  background-color: var(--gray6);

  @media (max-width: 767px) {
    padding: 1.3rem;
    padding-left: 3.8rem;
    font-size: 1.4rem;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 1.4rem;
  left: 1.6rem;
  width: 1.6rem;

  @media (max-width: 767px) {
    top: 1.3rem;
  }
`;

function SearchBar() {
  return (
    <Container>
      <SearchInput />
      <SearchIcon src="src/assets/icon-search.png" />
    </Container>
  );
}

export default SearchBar;
