import star from "../../images/components/star-blank.png";
import filledStar from "../../images/components/star-filled.png";
import kebab from "../../images/kebab.png";
import DefaultImage from "../../images/components/card_default.png";
import "./Card.css";

const DEFAULT = {
  createdAt: "2023. 3. 15",
  url: "",
  imageSource: DefaultImage,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas leo metus, tempor eu consectetur et, rutrum ut purus. Ut pellentesque semper mi. Vivamus eget aliquet nibh.",
  title: "Linkbrary",
};

const Card = ({ data }) => {
  const { createdAt, url, imageSource, description, title } = data;

  const getTimeFormat = (ExTime) => {
    const createTime = new Date(ExTime);
    const year = createTime.getFullYear();
    const month = createTime.getMonth() + 1;
    const day = createTime.getDate();
    return `${year}. ${month}. ${day}`;
  };

  const getTimeDiffFormat = (ExTime) => {
    const createTime = new Date(ExTime);
    const currentTime = new Date();
    const minuteDiff = Math.round((currentTime - createTime) / 1000 / 60);
    const round = (time) => Math.round(time);
    const day = 60 * 24;
    const month = day * 31;

    if (minuteDiff < 2) {
      return "1 minute ago";
    } else if (minuteDiff <= 59) {
      return `${minuteDiff} minutes ago`;
    } else if (minuteDiff < 120) {
      return "1 hour ago";
    } else if (round(minuteDiff / 60) <= 23) {
      return `${Math.round(minuteDiff / 60)} hours ago`;
    } else if (round(minuteDiff / 60) < 48) {
      return `1 day ago`;
    } else if (round(minuteDiff / day) <= 30) {
      return `${round(minuteDiff / day)} days ago`;
    } else if (round(minuteDiff / day) < 62) {
      return "1 month ago";
    } else if (round(minuteDiff / month) < 12) {
      return `${round(minuteDiff / month)} months ago`;
    } else {
      return `${Math.floor(minuteDiff / month / 12)} years ago`;
    }
  };

  const time = getTimeFormat(createdAt);
  const timeDiff = getTimeDiffFormat(createdAt);

  const handleStarClick = (e) => {
    e.preventDefault();
    if (e.target.src === star) {
      e.target.src = filledStar;
    } else {
      e.target.src = star;
    }
  };

  return (
    <a href={url} id="card" target="_blank" rel="noreferrer noopener">
      <div className="card">
        <div className="image-box">
          <img className="card-image" src={imageSource ?? DefaultImage} alt={title ?? DEFAULT.title} />
        </div>
        <div className="favorite">
          <img onClick={handleStarClick} src={star} className="star" alt="star" />
        </div>
        <div className="contents">
          <div className="content-header">
            <p className="upload-time">{time ?? DEFAULT.createdAt}</p>
            <img src={kebab} alt="kebab" />
          </div>
          <p className="content">{description ?? DEFAULT.description}</p>
          <p className="date">{timeDiff}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
