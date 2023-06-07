import { useState, useEffect, useRef } from "react";

const useResponsiveHeader = (headerRef: React.RefObject<HTMLElement>) => {
  const prevScrollPositionRef = useRef(0);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

  const handleScroll = () => {
    setCurrentScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (prevScrollPositionRef.current)
      if (currentScrollPosition > prevScrollPositionRef.current) {
        headerRef.current?.classList.add("hide");
        headerRef.current?.classList.remove("shadow");
      } else {
        headerRef.current?.classList.remove("hide");
        headerRef.current?.classList.add("shadow");
      }
    if (currentScrollPosition === 0) {
      headerRef.current?.classList.remove("hide");
      headerRef.current?.classList.remove("shadow");
    }
    prevScrollPositionRef.current = currentScrollPosition;
  }, [currentScrollPosition, headerRef]);
};

export default useResponsiveHeader;
