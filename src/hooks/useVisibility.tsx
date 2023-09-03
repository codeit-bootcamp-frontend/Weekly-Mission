import { useEffect, useRef, useState } from "react";

interface VisibilityResult<T extends HTMLElement> {
  ref: React.RefObject<T>;
  isVisible: boolean;
}

const useVisibility = <T extends HTMLElement>(): VisibilityResult<T> => {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );

    const currentRef = elementRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref: elementRef, isVisible };
};

export default useVisibility;
