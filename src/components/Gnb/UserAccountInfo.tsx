import styled from "styled-components";
import { GnbProps } from "./Gnb";

const DEFAULT_PROFILE_IMG_SRC = "assets/images/profile_img.png";

const UserAccountInfo = ({ email, profileImgSrc }: GnbProps) => {
  return (
    <SAccountBox>
      <SProfileBox>
        <SProfileImg src={profileImgSrc ?? DEFAULT_PROFILE_IMG_SRC} />
      </SProfileBox>
      <SEmailBox>{email}</SEmailBox>
    </SAccountBox>
  );
};

const SAccountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SProfileBox = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  margin-right: 0.375rem;
  @media only screen and (max-width: 767px) {
    margin: none;
  }
`;
const SProfileImg = styled.img`
  width: 100%;
  height: auto;
`;
const SEmailBox = styled.div`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
export default UserAccountInfo;
