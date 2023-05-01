import styled from "styled-components";
import FilledStar from "assets/star-filled.png";
import Star from "assets/star.png";

const Icon = styled.img`
  cursor: pointer;
  width: 3.2rem;
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

function BookmarkIcon({ Bookmark, handleToggler }) {
  const src = Bookmark ? FilledStar : Star;
  return (
    <div onClick={handleToggler}>
      <Icon src={src} alt="Bookmark Icon" />
    </div>
  );
}

export default BookmarkIcon;
