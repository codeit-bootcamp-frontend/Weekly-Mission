"use client";

import { useEffect, useRef, useState } from "react";

const useViewObserver = () => {
  const observerTargetRefs = useRef<HTMLDivElement[]>([]);
  const [inView, setInView] = useState<boolean | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.8,
      }
    );
    observerTargetRefs.current.forEach((ref) => io.observe(ref));

    return () => {
      io.disconnect();
    };
  }, []);

  return { inView, observerTargetRefs };
};

export default useViewObserver;
