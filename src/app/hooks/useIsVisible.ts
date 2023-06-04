import { useState, useEffect, useCallback } from "react";

const useIsVisible = (threshold: number): boolean => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = useCallback(() => {
    if (window.scrollY > threshold) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return isVisible;
};

export default useIsVisible;
