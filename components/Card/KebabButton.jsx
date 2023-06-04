"use client";

import Image from "next/image";
import PropTypes from "prop-types";

import kebab from "@/public/images/show-more.png";

export default function KebabButton({ buttonStyle }) {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      <Image width={21} height={17} src={kebab} alt="케밥 버튼" />
    </button>
  );
}

KebabButton.propTypes = {
  buttonStyle: PropTypes.object.isRequired,
};
