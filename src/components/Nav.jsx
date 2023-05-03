import { Link } from "react-router-dom";
import styled from "styled-components";
import LinkButton from "components/LinkButton";
import { useUserId } from "contexts/UserIdContext";
import useUserData from "hooks/useUserData";

const NavWrapper = styled.nav`
  position: sticky;
  inset: 0;
  z-index: 1;
  background-color: var(--navbar-background);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2rem 20rem;
  max-width: 192rem;
  height: 9.4rem;

  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 86.4rem;
    padding: 2rem 3.2rem;
  }

  @media (max-width: 767px) {
    margin: 0;
    padding: 0 3.2rem;
    height: 6.3rem;
  }
`;

const StyledLinkButton = styled(LinkButton)`
  width: 12.8rem;

  @media (max-width: 767px) {
    width: 8rem;
    padding: 1rem 0;
    font-size: 1.4rem;
  }
`;

const Logo = styled.img`
  width: 13.3rem;

  @media (max-width: 767px) {
    width: 7.7rem;
  }
`;

const NavUserProfile = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.6rem;
  text-align: center;
  line-height: 2.8rem;
  font-size: 1.4rem;
`;

const ImageContainer = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 70%;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  object-fit: cover;
`;

const ProfileEmail = styled.p`
  margin: 0;
  color: var(--profile-email);

  @media (max-width: 767px) {
    display: none;
  }
`;

function Nav() {
  const { userEmail, userImage } = useUserData();

  const userId = useUserId();
  const isAuth = userId > 0 ? true : false;

  return (
    <NavWrapper>
      <NavContainer>
        <Link to="/">
          <Logo src="logo.png" alt="Linkbrary Logo" />
        </Link>
        {isAuth ? (
          <NavUserProfile>
            <Link to="/my-link">
              <ImageContainer>
                <ProfileImage
                  src={userImage}
                  alt={`${userId}'s Profile Image`}
                />
              </ImageContainer>
            </Link>
            <ProfileEmail>{userEmail}</ProfileEmail>
          </NavUserProfile>
        ) : (
          <Link to="/signin">
            <StyledLinkButton>로그인</StyledLinkButton>
          </Link>
        )}
      </NavContainer>
    </NavWrapper>
  );
}

export default Nav;
