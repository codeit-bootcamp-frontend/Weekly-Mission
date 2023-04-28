import React from "react";
import styled from "styled-components";

interface folderInfoProps {
  ownerName: string;
  folderName: string;
  profileImgSrc?: string;
}

const DEFAULT_PROFILE_IMG_SRC = "/src/assets/images/avatar.png";

const FolderInfo: React.FC<folderInfoProps> = ({
  ownerName,
  folderName,
  profileImgSrc = DEFAULT_PROFILE_IMG_SRC,
}: folderInfoProps) => {
  return (
    <SFolderInfoContainer className="user-info-container">
      <div className="profile-container">
        <div className="profile-img-box">
          <img id="profile-img" src={profileImgSrc} alt="avatar" />
        </div>
        <p id="username" className="username">
          {ownerName}
        </p>
      </div>
      <h1 id="folder-name" className="title">
        {folderName}
      </h1>
    </SFolderInfoContainer>
  );
};

const SFolderInfoContainer = styled.div`
  width: fit-content;
  margin: auto;

  .profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .profile-img-box {
    width: 3.75rem;
    height: 3.75rem;
  }

  .profile-img-box img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .username {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 3rem;
  }
`;
export default FolderInfo;
