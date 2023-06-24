"use client";

import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { IFolder, ILink } from "@/types/linkbrary";

import AddLinkBar from "./AddLinkBar";
import styles from "./AddLinkField.module.scss";

interface IAddLinkFieldProps {
  userId: number;
  folders: IFolder[] | [];
  links: ILink[] | [];
  inView: boolean | null;
}

const AddLinkField = forwardRef(function AddLinkField(
  { userId, folders, links, inView }: IAddLinkFieldProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const FOOTER_HEIGHT = 160;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [throttle, setThrottle] = useState(false);
  const [transition, setTransition] = useState(false);

  const handleScroll = useCallback(() => {
    if (throttle) return;
    if (!throttle) {
      setThrottle(true);
      setTimeout(() => {
        if (scrollRef.current) {
          const currentScrollPosition =
            scrollRef.current.getBoundingClientRect().bottom + window.scrollY; // pageYOffset == scrollY
          const IntersectedFooter = document.body.scrollHeight - FOOTER_HEIGHT;
          setTransition(currentScrollPosition >= IntersectedFooter);
          setThrottle(false);
        }
      }, 300);
    }
  }, [throttle]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={styles.observedWrapper}>
      <div
        ref={scrollRef}
        className={`${styles.addLinkContainer} ${
          styles[`${inView ? "view" : "not-view"}`]
        } ${styles[`${transition ? "tr" : "not-tr"}`]}`}
      >
        <AddLinkBar userId={userId} folders={folders} links={links} />
      </div>
      <div className={styles.observed} ref={ref}></div>
    </div>
  );
});

export default AddLinkField;
