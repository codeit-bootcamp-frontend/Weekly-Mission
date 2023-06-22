"use client";

import { ForwardedRef, forwardRef } from "react";

import AddLinkBar from "./AddLinkBar";
import styles from "./AddLinkField.module.scss";

interface IAddLinkFieldProps {
  inView: boolean | null;
}

const AddLinkField = forwardRef(function AddLinkField(
  { inView }: IAddLinkFieldProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div className={styles.observedWrapper}>
      <div className={`${styles.addLinkContainer} ${styles[`${inView}`]}`}>
        <AddLinkBar />
      </div>
      <div className={styles.observed} ref={ref}></div>
    </div>
  );
});

export default AddLinkField;
