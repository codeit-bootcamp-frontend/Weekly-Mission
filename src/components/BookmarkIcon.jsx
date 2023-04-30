import styled from "styled-components";

const Icon = styled.img`
  cursot: pointer;
`;

function BookmarkIcon() {
  return <Icon src="src/assets/star.png" alt="Bookmark Icon" />;
}

export default BookmarkIcon;
