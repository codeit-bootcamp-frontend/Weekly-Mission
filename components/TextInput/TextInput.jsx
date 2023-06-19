"use client";

import styles from "./TextInput.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function TextInput({onInputChange}) {

  const handleInputChange = (e) => {
    onInputChange(e)
  }

  return (
    <>
      <input type="text" placeholder="내용 입력" onChange={handleInputChange} className={cx("text-input")}/>
    </>
  );
}
