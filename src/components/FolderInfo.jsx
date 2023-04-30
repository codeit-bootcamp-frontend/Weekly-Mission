import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CodeitAvatarIcon from "@assets/images/users/codeit-avatar.png";

function FolderInfo({ folder }) {
  const [profileSrc, setProfileSrc] = useState(CodeitAvatarIcon);
  const [ownerName, setOwnerName] = useState("@코드잇");
  const [folderName, setFolderName] = useState("⭐️ 즐겨찾기");

  useEffect(() => {
    if (folder?.owner?.profileImageSource) {
      setProfileSrc(folder?.owner?.profileImageSource);
    }
    if (folder?.owner?.name) {
      setOwnerName(folder?.owner?.name);
    }
    if (folder?.name) {
      setFolderName(folder?.name);
    }
  }, [folder]);

  return (
    <UserInfo>
      <CodeitAvatar src={profileSrc} />
      <UserName>{ownerName}</UserName>
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
