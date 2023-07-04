import { useEffect, useRef, useState } from "react";

const useAboveBottom = <T extends HTMLElement>() => {
  const elementRef = useRef<T>(null);
  const [isAboveBottom, setIsAboveBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setIsAboveBottom(rect.top <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { elementRef, isAboveBottom };
};

export default useAboveBottom;
