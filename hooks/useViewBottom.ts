"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const useViewBottom = () => {
  const FOOTER_HEIGHT = 160;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [throttle, setThrottle] = useState<boolean>(false);
  const [isTransition, setIsTransition] = useState<boolean>(false);

  const throttledHandleScroll = useCallback(() => {
    if (throttle) return;
    if (!throttle) {
      setThrottle(true);
      setTimeout(() => {
        if (scrollRef.current) {
          const currentScrollPosition =
            scrollRef.current.getBoundingClientRect().bottom + window.scrollY; // pageYOffset == scrollY
          const IntersectedFooter = document.body.scrollHeight - FOOTER_HEIGHT;
          setIsTransition(currentScrollPosition >= IntersectedFooter);
          setThrottle(false);
        }
      }, 300);
    }
  }, [throttle]);

  useEffect(() => {
    throttledHandleScroll();
    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [throttledHandleScroll]);

  return { isTransition, scrollRef };
};

export default useViewBottom;
