"use client";

import { ForwardedRef, forwardRef } from "react";

import { IFolder, ILink } from "@/types/linkbrary";

import AddLinkBar from "./AddLinkBar";
import styles from "./AddLinkField.module.scss";

interface IAddLinkFieldProps {
  userId: number;
  folders: IFolder[] | [];
  links: ILink[] | [];
  inView: boolean | null;
  isTransition: boolean;
  scrollRef: React.MutableRefObject<HTMLDivElement | null>;
}

const AddLinkField = forwardRef(function AddLinkField(
  {
    userId,
    folders,
    links,
    inView,
    isTransition,
    scrollRef,
  }: IAddLinkFieldProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div className={styles.observedWrapper}>
      <div
        ref={scrollRef}
        className={`${styles.addLinkContainer} ${
          styles[`${inView ? "view" : "not-view"}`]
        } ${styles[`${isTransition ? "tr" : "not-tr"}`]}`}
      >
        <AddLinkBar userId={userId} folders={folders} links={links} />
      </div>
      <div className={styles.observed} ref={ref}></div>
    </div>
  );
});

export default AddLinkField;
