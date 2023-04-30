import styled from "styled-components";

const Icon = styled.img`
  cursot: pointer;
  width: 3.2rem;
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

function BookmarkIcon({ Bookmark, handleToggler }) {
  return (
    <div onClick={handleToggler}>
      {Bookmark ? (
        <Icon src="src/assets/star-filled.png" alt="Bookmark Icon" />
      ) : (
        <Icon src="src/assets/star.png" alt="Bookmark Icon" />
      )}
    </div>
  );
}

export default BookmarkIcon;
