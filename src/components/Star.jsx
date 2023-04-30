import React, { useState } from "react";
import starImgDefault from "/src/assets/gray-star.png";
import starImgFavor from "/src/assets/purple-star.png";

function Star() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleStarClick = (e) => {
    e.preventDefault();
    setIsFavorite((prevIsFavor) => !prevIsFavor);
  };

  return (
    <img
      src={isFavorite ? starImgFavor : starImgDefault}
      alt="별(favorite)"
      style={{ width: "100%", height: "100%" }}
      onClick={handleStarClick}
    />
  );
}

export default Star;
