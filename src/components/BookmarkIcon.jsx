import styled from "styled-components";

const Icon = styled.img`
  cursor: pointer;
  width: 3.2rem;
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

function BookmarkIcon({ Bookmark, handleToggler }) {
  const src = Bookmark ? "star-filled.png" : "star.png";
  return (
    <div onClick={handleToggler}>
      <Icon src={src} alt="Bookmark Icon" />
    </div>
  );
}

export default BookmarkIcon;
