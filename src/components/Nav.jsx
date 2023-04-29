import { Link } from "react-router-dom";
import styled from "styled-components";
import LinkButton from "components/LinkButton";
import { useUserId } from "contexts/UserIdContext";
import { useEffect, useState } from "react";
import { getUsers } from "utils/api";

const StickyTag = styled.div`
  position: sticky;
  inset: 0;
  z-index: 1;
  background-color: var(--navbar-background);
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2rem 20rem;
  max-width: 192rem;
  height: 9.4rem;

  ${LinkButton} {
    width: 12.8rem;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 86.4rem;
    padding: 2rem 3.2rem;
  }

  @media (max-width: 767px) {
    margin: 0;
    padding: 0 3.2rem;
    height: 6.3rem;

    ${LinkButton} {
      width: 8rem;
      padding: 1rem 0;
      font-size: 1.4rem;
    }
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
  const defaultProfilePath = "src/assets/default-profile.png";
  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserImage] = useState(defaultProfilePath);
  const userId = useUserId();
  const isAuth = userId > 0 ? true : false;

  // userId에 맞는 데이터를 가져와야 하는데 api에 데이터가 하나밖에 없고 배열의 형태가 아니라서 일단 조건 없이 가져오는 것으로 임시 처리했습니다.
  useEffect(() => {
    async function getUserData() {
      const response = await getUsers();
      if (!response || !response.data) return;
      const { email, profileImageSource } = response.data;
      if (email !== undefined) {
        setUserEmail(email);
      } else {
        setUserEmail("");
      }
      if (profileImageSource !== undefined) {
        setUserImage(profileImageSource);
      } else {
        setUserImage(defaultProfilePath);
      }
    }
    getUserData();
  }, []);

  return (
    <StickyTag>
      <NavContainer>
        <Link to="/">
          <Logo src="logo.png" alt="Linkbrary Logo" />
        </Link>
        {isAuth ? (
          <NavUserProfile>
            <Link to="/my-link">
              <ImageContainer>
                <ProfileImage
                  src={`${userImage}`}
                  alt={`${userId}의 Profile Image`}
                />
              </ImageContainer>
            </Link>
            <ProfileEmail>{`${userEmail}`}</ProfileEmail>
          </NavUserProfile>
        ) : (
          <Link to="/signin">
            <LinkButton>로그인</LinkButton>
          </Link>
        )}
      </NavContainer>
    </StickyTag>
  );
}

export default Nav;
