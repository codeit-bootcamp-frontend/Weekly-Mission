import React, { MouseEventHandler } from "react";
import styles from "./Option.module.scss";
import Image from "next/image";

interface OptionProps {
  imgSrc: string;
  label: string;
  onClick: MouseEventHandler;
}

const Option = ({ imgSrc, label, onClick }: OptionProps) => {
  return (
    <div className={styles.optionContainer} onClick={onClick}>
      <div className={styles.optionIconBox}>
        <Image src={imgSrc} alt="option item" fill sizes="32vw" />
      </div>
      <span>{label}</span>
    </div>
  );
};

export default Option;
