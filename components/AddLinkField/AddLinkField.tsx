"use client";

import { ForwardedRef, forwardRef } from "react";

import { IFolder, ILink } from "@/types/linkbrary";

import AddLinkBar from "./AddLinkBar";
import styles from "./AddLinkField.module.scss";

interface IAddLinkFieldProps {
  folders: IFolder[] | [];
  links: ILink[] | [];
  inView: boolean | null;
}

const AddLinkField = forwardRef(function AddLinkField(
  { folders, links, inView }: IAddLinkFieldProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div className={styles.observedWrapper}>
      <div className={`${styles.addLinkContainer} ${styles[`${inView}`]}`}>
        <AddLinkBar folders={folders} links={links} />
      </div>
      <div className={styles.observed} ref={ref}></div>
    </div>
  );
});

export default AddLinkField;
