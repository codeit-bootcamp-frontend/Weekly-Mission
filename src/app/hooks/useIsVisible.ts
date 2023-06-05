import { useState, useEffect, useRef } from "react";

const useIsVisible = (elementRef: React.RefObject<HTMLElement>): boolean => {
  const [isVisible, setIsVisible] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    console.log(elementRef.current);
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    const currentObserver = observerRef.current;
    const currentElement = elementRef.current;

    if (currentElement && currentObserver) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver?.unobserve(currentElement);
      }
    };
  }, [elementRef]);

  return isVisible;
};

export default useIsVisible;
