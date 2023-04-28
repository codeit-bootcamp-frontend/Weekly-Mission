import React from "react";
import styled from "styled-components";
import FolderInfo from "../components/FolderInfo/FolderInfo";
import LinkCardList from "../components/LinkCard/LinkCardList";
import SearchBar from "../components/SearchBar/SearchBar";
const FOLDER_INFO_PROPS = {
  ownerName: "Kenny",
  folderName: "즐겨찾기",
};

const LINKCARD_LIST_PROPS = {
  cardProps: [
    {
      id: 1,
      href: "#",
      createdDate: "1995-12-17T03:24:00",
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
    },
    {
      id: 2,
      href: "#",
      createdDate: "1995-12-17T03:24:00",
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
    },
    {
      id: 3,
      href: "#",
      createdDate: "1995-12-17T03:24:00",
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
    },
    {
      id: 4,
      href: "#",
      createdDate: "1995-12-17T03:24:00",
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
    },
    {
      id: 5,
      href: "#",
      createdDate: "1995-12-17T03:24:00",
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
    },
    {
      id: 6,
      href: "#",
      createdDate: "1995-12-17T03:24:00",
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
    },
    {
      id: 7,
      href: "#",
      createdDate: "1995-12-17T03:24:00",
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
    },
    {
      id: 8,
      href: "#",
      createdDate: "1995-12-17T03:24:00",
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
    },
    {
      id: 9,
      href: "#",
      createdDate: "1995-12-17T03:24:00",
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
    },
    {
      id: 10,
      href: "#",
      createdDate: "1995-12-17T03:24:00",
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
    },
    {
      id: 11,
      href: "#",
      createdDate: "1995-12-17T03:24:00",
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
    },
  ],
};
const SharedPage = () => {
  return (
    <SMain>
      <section className="intro-section">
        <FolderInfo {...FOLDER_INFO_PROPS}></FolderInfo>
      </section>
      <section className="card-section">
        <div className="search-bar-wrapper">
          <SearchBar
            action={"/search/links?q=null"}
            placeholder={"원하는 링크를 검색해 보세요"}
          />
        </div>
        <div className="card-list-wrapper">
          <LinkCardList {...LINKCARD_LIST_PROPS} />
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
