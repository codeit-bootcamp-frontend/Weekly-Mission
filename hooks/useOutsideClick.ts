"use client";

import { useEffect } from "react";

const useOutsideClick = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  callback: () => void
) => {
  const handleClick = (e: React.BaseSyntheticEvent | MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("click", handleClick);
    }, 0);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
