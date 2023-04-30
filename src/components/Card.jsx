import styled from "styled-components";
import BookmarkIcon from "components/BookmarkIcon";

const Container = styled.div``;
const Contents = styled.img``;
const CardImage = styled.img``;
const CardText = styled.div``;
const FirstLine = styled.div``;
const Since = styled.div``;
const EclipseContainer = styled.div``;
const Eclipse = styled.div``;
const CardDescription = styled.div``;
const CardCreatedAt = styled.div``;

function Card() {
  return (
    <Container>
      {/* <Contents>
        <CardImage />
        <CardText>
          <FirstLine>
            <Since />
            <EclipseContainer>
              <Eclipse />
              <Eclipse />
              <Eclipse />
            </EclipseContainer>
          </FirstLine>
          <CardDescription />
          <CardCreatedAt />
        </CardText>
      </Contents>
      <BookmarkIcon /> */}
    </Container>
  );
}

export default Card;
