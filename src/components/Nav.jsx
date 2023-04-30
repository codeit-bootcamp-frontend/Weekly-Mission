import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import LinkButton from "components/LinkButton";
import { useUserId } from "contexts/UserIdContext";
import { getUsers } from "utils/api";

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
  const location = useLocation();
  if (["/signin", "/signup"].includes(location.pathname)) {
    return;
  }

  const defaultProfileSource = "default-profile.png";

  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserImage] = useState(defaultProfileSource);

  // userId에 맞는 데이터를 가져와야 하는데
  // api에 데이터가 하나밖에 없고 배열의 형태가 아니라서
  // 일단 조건 없이 가져오는 것으로 임시 처리했습니다.
  const getUserData = async () => {
    const { data } = await getUsers();
    if (!data) return;
    const { email, profileImageSource } = data;
    setUserEmail(email || "");
    setUserImage(profileImageSource || defaultProfileSource);
  };

  useEffect(() => {
    getUserData();
  }, []);

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
