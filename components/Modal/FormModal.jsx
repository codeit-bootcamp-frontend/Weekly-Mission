"use client";

import { useState } from "react";

import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./FormModal.module.scss";
import ModalFrame from "./ModalFrame";

const cx = classNames.bind(styles);

const formModalMap = {
  edit: {
    title: "폴더 이름 변경",
    buttonText: "변경하기",
  },
  add: {
    title: "폴더 추가",
    buttonText: "추가하기",
  },
};

export default function FormModal({ folder, onClose, onSubmit }) {
  const type = folder ? "edit" : "add";
  const [value, setValue] = useState(type === "edit" ? folder.name : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "edit") onSubmit(folder.id, value);
    else onSubmit(value);
    onClose();
  };

  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <ModalFrame onClose={onClose}>
      <div className={cx("container")}>
        <h3 className={cx("title")}>{formModalMap[type].title}</h3>
        <form className={cx("form")} type="text" onSubmit={handleSubmit}>
          <input
            className={cx("input")}
            placeholder="내용 입력"
            value={value}
            onChange={handleChangeInput}
          ></input>
          <button className={cx("button")} type="submit">
            {formModalMap[type].buttonText}
          </button>
        </form>
      </div>
    </ModalFrame>
  );
}

FormModal.propTypes = {
  folder: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
