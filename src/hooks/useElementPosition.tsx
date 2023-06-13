import { useEffect, useState } from "react";

const useElementPosition = (
  elementRef: React.RefObject<HTMLElement>
): number | undefined => {
  const [elementPosition, setElementPosition] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const { top } = elementRef.current.getBoundingClientRect();
        setElementPosition(top);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef]);

  return elementPosition;
};

export default useElementPosition;
