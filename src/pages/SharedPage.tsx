import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getFolderRequest } from "../api/folderApi";
import FolderInfo, {
  folderInfoProps,
} from "../components/FolderInfo/FolderInfo";
import { linkCardProp } from "../components/LinkCard/LinkCardItem";
import LinkCardList from "../components/LinkCard/LinkCardList";
import SearchBar from "../components/SearchBar/SearchBar";

const SharedPage = () => {
  const [folderData, setFolderData] = useState<folderInfoProps>();
  const [cardDataList, setCardDataList] = useState<linkCardProp[]>();

  const getCardListProp = (dataList) => {
    return dataList.map((data) => {
      return {
        id: data.id,
        href: data.url,
        thumbnailSrc: data.imageSource,
        description: data.description,
        createdDate: data.createdAt,
      };
    });
  };

  const getFolderInfoProp = (folder) => {
    return {
      folderName: folder.name,
      ownerName: folder.owner.name,
      profileImgSrc: folder.owner.profileImageSource,
    };
  };

  useEffect(() => {
    getFolderRequest()
      .then((res) => res.data)
      .then((data) => {
        const { folder } = data;
        setFolderData(getFolderInfoProp(folder));
        setCardDataList(getCardListProp(folder.links));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <SMain>
      <section className="intro-section">
        {folderData && <FolderInfo {...folderData}></FolderInfo>}
      </section>
      <section className="card-section">
        <div className="search-bar-wrapper">
          <SearchBar
            action={"/search/links?q=null"}
            placeholder={"원하는 링크를 검색해 보세요"}
          />
        </div>
        <div className="card-list-wrapper">
          {cardDataList && <LinkCardList cardProps={cardDataList} />}
        </div>
      </section>
    </SMain>
  );
};

const SMain = styled.main`
  .intro-section {
    text-align: center;
    background: var(--gray-1);
    padding-top: 1.25rem;
    padding-bottom: 3.75rem;
  }

  .user-info-container {
    width: fit-content;
    margin: auto;
  }

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

  .card-section {
    width: fit-content;
    margin: 2.5rem auto 6.25rem auto;
    display: flex;
    flex-direction: column;
  }

  .search-bar-wrapper {
    margin-bottom: 2.5rem;
  }

  @media only screen and (max-width: 767px) {
    .intro-section {
      padding-top: 0.625rem;
      padding-bottom: 2.5rem;
    }

    .profile-container {
      gap: 0.375rem;
      margin-bottom: 0.625rem;
    }

    .profile-img-box {
      width: 2.5rem;
      height: 2.5rem;
    }

    .username {
      font-size: 0.875rem;
      line-height: 1.0625rem;
    }

    .title {
      font-size: 2rem;
      line-height: 2.375rem;
      letter-spacing: -0.0125rem;
    }

    .card-section {
      margin: 1.25rem auto 3.75rem auto;
    }

    .search-bar-wrapper {
      margin-bottom: 2rem;
    }
  }
`;
export default SharedPage;
