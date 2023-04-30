import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OwnerImage = styled.img`
  width: 6rem;
  margin-top: 2rem;
  margin-bottom: 1.2rem;
`;

const Owner = styled.p`
  margin: 0;
`;

const Folder = styled.h2`
  margin: 2rem 0 6rem;
  font-size: 4rem;
  font-weight: 600;
`;

function SharedHeader(props) {
  return (
    <Container>
      <OwnerImage src={props.OwnerImage} alt="User Avatar" />
      <Owner>{props.OwnerName}</Owner>
      <Folder>{props.FolderName}</Folder>
    </Container>
  );
}

export default SharedHeader;
