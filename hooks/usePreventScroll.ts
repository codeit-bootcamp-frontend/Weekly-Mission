"use client";

import { useEffect } from "react";

import { allowScroll, preventScroll } from "@/lib/modal";

const usePreventScroll = () => {
  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);
};

export default usePreventScroll;
