import styled from "styled-components";
import CodeitAvatarIcon from "@assets/images/users/codeit-avatar.png";

function FolderInfo({ folder }) {
  const {
    owner: { profileImageSource = CodeitAvatarIcon, name = "@코드잇" } = {},
    name: folderName,
  } = folder || {};

  return (
    <UserInfo>
      <CodeitAvatar src={profileImageSource} />
      <UserName>{name}</UserName>
      <PageHeading>{folderName}</PageHeading>
    </UserInfo>
  );
}

export default FolderInfo;

const UserInfo = styled.div`
  margin: 2rem auto;
  @media screen and (max-width: 767px) {
    margin: 1rem auto;
  }
`;

const UserName = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  margin: 1.2rem 0 0;
`;

const CodeitAvatar = styled.img`
  width: 6.4rem;
  height: 6.4rem;
`;

const PageHeading = styled.h1`
  margin: 0;
`;
