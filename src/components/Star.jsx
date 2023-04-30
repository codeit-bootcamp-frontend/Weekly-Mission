import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Star = ({ isStarred }) => {
  const [starred, setStarred] = useState(isStarred);
  const fillRef = useRef(null);

  const handleStarClick = (event) => {
    console.log("클릭 됨");
    event.stopPropagation();
    setStarred((prev) => !prev);
  };

  const changeFill = () => {
    const fillOpacity = starred ? "1" : "0.2";
    const fillColor = starred
      ? "var(--linkbrary-primary)"
      : "var(--linkbrary-black)";
    fillRef.current.setAttribute("fill", fillColor);
    fillRef.current.setAttribute("fill-opacity", fillOpacity);
  };

  useEffect(() => {
    changeFill();
  }, [starred]);

  return (
    <StarWrapper isStarred={starred} onClick={handleStarClick}>
      <svg
        width="30"
        height="31"
        viewBox="0 0 30 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={fillRef}
          d="M14.9094 1.37585C14.9453 1.29893 15.0547 1.29893 15.0906 1.37585L19.1136 9.99161C19.269 10.3244 19.5802 10.5577 19.9433 10.6135L28.9917 12.0032C29.0719 12.0155 29.1048 12.1134 29.0482 12.1717L22.4597 18.9597C22.2174 19.2093 22.1075 19.5588 22.1632 19.9021L23.7128 29.4513C23.7261 29.5338 23.6385 29.5953 23.5655 29.5547L15.5343 25.092C15.202 24.9073 14.798 24.9073 14.4657 25.092L6.43452 29.5547C6.3615 29.5953 6.27386 29.5338 6.28724 29.4513L7.8368 19.9021C7.89251 19.5587 7.78257 19.2093 7.54033 18.9597L0.95177 12.1717C0.895187 12.1134 0.928051 12.0155 1.00835 12.0032L10.0567 10.6135C10.4198 10.5577 10.731 10.3244 10.8864 9.99161L14.9094 1.37585Z"
          fill={isStarred ? "#FFC107" : "gray"}
          fillOpacity={isStarred ? "1" : "0.2"}
          stroke="white"
        />
      </svg>
    </StarWrapper>
  );
};

export default Star;

const StarWrapper = styled.div`
  svg {
    cursor: pointer;
  }
`;
