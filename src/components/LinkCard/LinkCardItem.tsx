import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../styles/colors";

export interface linkCardProp {
  id: number;
  href: string;
  thumbnailSrc?: string;
  createdDate: string;
  description: string;
}

const LinkCardItem = ({
  id,
  href,
  thumbnailSrc,
  createdDate,
  description,
}: linkCardProp) => {
  const [isLiked, setIsLiked] = useState(false);

  const parseDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return [year, month, day].join(".");
  };

  const getTimeSinceCreation = (dateString: string) => {
    const updatedDate = new Date(dateString);
    const today = new Date();
    const timeDiff = today.getTime() - updatedDate.getTime();

    const MINUTE = 60 * 1000;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    const MONTH = DAY * 31;

    const timeMap = {
      [MINUTE * 2]: () => "1 minute ago",
      [MINUTE * 59]: (diff: number) =>
        Math.floor(diff / MINUTE) + " minutes ago",
      [HOUR * 2]: () => "1 hour ago",
      [HOUR * 23]: (diff: number) => Math.floor(diff / HOUR) + " hours ago",
      [DAY * 2]: () => "1 day ago",
      [DAY * 30]: (diff: number) => Math.floor(diff / DAY) + " days ago",
      [MONTH * 2]: () => "1 month ago",
      [MONTH * 12]: (diff: number) => Math.floor(diff / MONTH) + " months ago",
      [MONTH * 12 * 2]: () => "1 year ago",
    };

    const diff = Object.keys(timeMap).find((key) => timeDiff < Number(key));

    if (diff) {
      return timeMap[diff](timeDiff);
    }

    const years = Math.floor(timeDiff / (MONTH * 12));
    return years + " years ago";
  };

  return (
    <Link id="card-link" to={href}>
      <SCardContainer className="card-container">
        <div className="thumbnail-box">
          <img
            id="thumbnail"
            className="thumbnail-img"
            src={thumbnailSrc ?? "/src/assets/images/default-thumbnail.svg"}
            alt="thumbnail"
          />
          <img
            id="like-btn"
            className="like-btn"
            src={
              isLiked
                ? "/src/assets/images/like-btn-liked.svg"
                : "/src/assets/images/like-btn-unliked.svg"
            }
            alt="like button"
            onClick={() => {
              setIsLiked(!isLiked);
            }}
          />
        </div>
        <div className="metadata-container">
          <img
            id="kebab"
            className="kebab"
            src="/src/assets/images/kebab.svg"
            alt="kebab"
          />
          <p id="updated-time" className="updated-time">
            {getTimeSinceCreation(createdDate)}
          </p>
          <div id="description" className="description-container">
            {description}
          </div>
          <p id="date" className="date">
            {parseDate(createdDate)}
          </p>
        </div>
      </SCardContainer>
    </Link>
  );
};

const SCardContainer = styled.div`
  position: relative;
  width: 21.25rem;
  height: 20.875rem;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.08);
  border-radius: 0.9375rem;
  overflow: hidden;
  transition: all 0.2s linear;

  &:hover {
    background-color: ${colors.gray1};

    .thumbnail-img {
      transform: scale(1.2);
    }
  }
  .thumbnail-box {
    width: 100%;
    height: 12.5rem;
    overflow: hidden;
  }

  .thumbnail-img {
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0.2s linear;
  }

  .like-btn {
    display: block;
    position: absolute;
    top: 0.9375rem;
    right: 0.9375rem;
    cursor: pointer;
  }

  .metadata-container {
    position: relative;
    height: 8.4375rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.9375rem 1.25rem;
  }

  .kebab {
    width: 1.3125rem;
    height: 1.0625rem;
    position: absolute;
    top: 0.9375rem;
    right: 1.25rem;
    cursor: pointer;
  }

  .updated-time {
    font-size: 0.8125rem;
    color: #666666;
  }

  .description-container {
    height: 3.0625rem;
    font-size: 1rem;
    line-height: 1.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }

  .date {
    font-size: 0.875rem;
    color: #333333;
  }

  #card-link {
    color: inherit;
  }

  a:visited {
    color: inherit;
    background-color: transparent;
    text-decoration: none;
  }

  a:hover {
    color: inherit;
    background-color: transparent;
    text-decoration: none;
  }

  a:active {
    color: inherit;
    background-color: transparent;
    text-decoration: none;
  }

  @media only screen and (max-width: 767px) {
    width: 20.3125rem;
    height: 20.4375rem;

    .thumbnail-box {
      height: 12rem;
    }

    .like-btn {
      transform: scale(0.8825);
    }
  }
`;
export default LinkCardItem;
