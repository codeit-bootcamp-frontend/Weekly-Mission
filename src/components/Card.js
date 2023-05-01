import defaultImg from "../images/default_image.png";
import kebabImg from "../images/kebab.svg";
import defaultStar from "../images/default-star.svg";
import selectedStar from "../images/selected-star.svg";
import "./Card.css";

const DEFAULT = {
  createdAt: "2023. 3. 15",
  url: "https://www.codeit.kr/",
  description:
    "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
  title: "Linkbrary",
  imageSource: defaultImg,
};

function getTimeDiffFormat(prevDate) {
  const now = new Date();
  const createdDate = new Date(prevDate);

  const diffMSec = now.getTime() - createdDate.getTime();
  const diffMin = diffMSec / (60 * 1000);
  const diffHour = diffMin / 60;
  const diffDay = diffHour / 24;
  const diffMonth = diffDay / 30;
  const diffYear = diffMonth / 12;

  let result;

  if (diffYear >= 1) {
    result = Math.floor(diffYear);
    if (result >= 2) {
      return `${result} years ago`;
    } else {
      return `${result} year ago`;
    }
  }

  if (diffMonth >= 1) {
    result = Math.floor(diffMonth);
    if (result >= 2) {
      return `${result} months ago`;
    } else {
      return `${result} month ago`;
    }
  }

  if (diffDay >= 1) {
    result = Math.floor(diffDay);
    if (result >= 2) {
      return `${result} days ago`;
    } else {
      return `${result} day ago`;
    }
  }

  if (diffHour >= 1) {
    result = Math.floor(diffHour);
    if (result >= 2) {
      return `${result} hours ago`;
    } else {
      return `${result} hour ago`;
    }
  }

  if (diffMin >= 1) {
    result = Math.floor(diffMin);
    if (result >= 2) {
      return `${result} minutes ago`;
    } else {
      return `${result} minute ago`;
    }
  }
}

function getDateFormat(prevDate) {
  const date = new Date(prevDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}. ${month}. ${day}`;
}

function Card({ data: { createdAt = DEFAULT.createdAt, url = DEFAULT.url, description = DEFAULT.description, imageSource = DEFAULT.imageSource } }) {
  const timeDiffFormat = getTimeDiffFormat(createdAt);
  const dateFormat = getDateFormat(createdAt);

  const handleClickCard = () => {
    window.open(url);
  };

  const handleClickStar = (e) => {
    e.stopPropagation();
    const starImg = e.currentTarget.firstChild;

    if (starImg.classList.contains("selected-star")) {
      starImg.classList.remove("selected-star");
      starImg.src = defaultStar;
    } else {
      starImg.classList.add("selected-star");
      starImg.src = selectedStar;
    }
  };

  return (
    <div className="card" onClick={handleClickCard}>
      <div className="card-image-container">
        <img className="card-image" src={imageSource} />
        <button className="star-button" onClick={handleClickStar}>
          <img className="star-icon" src={defaultStar} />
        </button>
      </div>
      <div className="text-box">
        <div className="text-content">
          <div className="card-info">
            <span className="added-time">{timeDiffFormat}</span>
            <button className="kebab-button">
              <img src={kebabImg} />
            </button>
          </div>
          <p className="card-description">{description}</p>
          <span className="datetime">{dateFormat}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
