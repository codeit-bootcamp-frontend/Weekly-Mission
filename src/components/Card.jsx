import styled from "styled-components";
import BookmarkIcon from "components/BookmarkIcon";

const CardImage = styled.div`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 20rem;
`;

const Contents = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  width: 34rem;
  height: 33.4rem;
  background-color: var(--white);
  filter: drop-shadow(0px 5px 25px rgba(0, 0, 0, 0.08));

  @media (hover: hover) {
    &:hover {
      background-color: var(--gray5);

      ${CardImage} {
        background-size: 120%;
      }
    }
  }
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 2rem;
`;

const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TimeSince = styled.div`
  font-size: 1.4rem
  color: var(--card-time-since);
`;

const EclipseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1.9rem;
`;

const CardDescription = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 29.5rem;
  line-height: 150%;
  font-weight: 500;
  color: black;
`;

const CardCreatedAt = styled.div`
  font-size: 1.4rem;
  color: var(--card-date);
`;

function Card({ link }) {
  const defaultImageSource = "src/assets/default-card-image.png";
  return (
    <Contents>
      <a href={link.url} rel="noopener noreferrer" target="_blank">
        <CardImage src={link.imageSource || defaultImageSource} />
        <CardText>
          <FirstLine>
            <TimeSince>{link.createdAt}</TimeSince>
            <EclipseContainer>
              <img src="src/assets/eclipse.png" alt="eclipse" width="3" />
              <img src="src/assets/eclipse.png" alt="eclipse" width="3" />
              <img src="src/assets/eclipse.png" alt="eclipse" width="3" />
            </EclipseContainer>
          </FirstLine>
          <CardDescription>{link.description}</CardDescription>
          <CardCreatedAt>{link.createdAt}</CardCreatedAt>
        </CardText>
      </a>
      <BookmarkIcon />
    </Contents>
  );
}

export default Card;
