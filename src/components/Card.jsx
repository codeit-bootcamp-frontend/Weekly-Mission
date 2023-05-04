import React from "react";
import styled from "styled-components";
import Star from "@components/Star";
import KebabIcon from "@assets/images/kebab.svg";

function Card({ card }) {
  const { imageSrc, description, date, url } = card;

  function calculateTimeDiff(dateString) {
    const updatedDate = new Date(dateString);
    const today = new Date();
    const timeDiff = today - updatedDate;

    const MINUTE = 60 * 1000;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    const MONTH = DAY * 31;
    const YEAR = DAY * 365;

    const timeUnits = [
      { value: YEAR, label: "year" },
      { value: MONTH, label: "month" },
      { value: DAY, label: "day" },
      { value: HOUR, label: "hour" },
      { value: MINUTE, label: "minute" },
    ];

    for (let i = 0; i < timeUnits.length; i++) {
      const { value, label } = timeUnits[i];

      if (timeDiff < value) {
        continue;
      }

      const formattedTimeDiff = Math.floor(timeDiff / value);

      return (
        formattedTimeDiff +
        " " +
        label +
        (formattedTimeDiff > 1 ? "s" : "") +
        " ago"
      );
    }
  }

  function parseDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return [year, month, day].join(". ");
  }

  return (
    <CardContainer onClick={() => (window.location.href = url)}>
      <CardImage src={imageSrc} />
      <StarIcon>
        <Star />
      </StarIcon>
      <CardInfo>
        <CardInfoHead>
          <CardUpdateTime>{calculateTimeDiff(date)}</CardUpdateTime>
          <KebabIconWrap src={KebabIcon} />
        </CardInfoHead>
        <CardDescription>{description}</CardDescription>
        <CardDate>{parseDate(date)}</CardDate>
      </CardInfo>
    </CardContainer>
  );
}

export default Card;

const CardImage = styled.img`
  height: 20rem;
  object-fit: cover;
  overflow: hidden;
  display: block;
`;

const CardInfo = styled.div`
  padding: 1.5rem 2rem;
  position: relative;
  z-index: 1;
  height: 13.4rem;
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0rem 0.5rem 2.5rem rgba(0, 0, 0, 0.08));
  border-radius: 2.5rem;
  overflow: hidden;
  width: 34rem;
  height: 33.4rem;
  background-color: var(--linkbrary-white);

  &:hover {
    ${CardImage} {
      transform: scale(1.2);
    }
    ${CardInfo} {
      background-color: var(--linkbrary-white-smoke);
    }
  }

  @media screen and (max-width: 767px) {
    width: 32.5rem;
    height: 32.7rem;
  }
`;

const StarIcon = styled.i`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  z-index: 1;
`;

const CardInfoHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const KebabIconWrap = styled.i`
  width: 2.1rem;
  height: 1.7rem;
`;

const CardUpdateTime = styled.div`
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.6rem;
  color: #666666;
`;

const CardDescription = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin: 1rem auto;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CardDate = styled.div`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: #333333;
`;
