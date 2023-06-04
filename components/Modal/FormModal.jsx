"use client";

import classNames from "classnames/bind";
import PropTypes from "prop-types";

import { formModalMap } from "@/utils/data";

import styles from "./FormModal.module.scss";
import ModalFrame from "./ModalFrame";

const cx = classNames.bind(styles);

export default function FormModal({ type }) {
  return (
    <ModalFrame>
      <div className={cx("container")}>
        <h3 className={cx("title")}>{formModalMap[type].title}</h3>
        <form className={cx("form")} type="text">
          <input className={cx("input")} placeholder="내용 입력"></input>
          <button className={cx("button")} type="submit">
            {formModalMap[type].buttonText}
          </button>
        </form>
      </div>
    </ModalFrame>
  );
}

FormModal.propTypes = {
  type: PropTypes.string.isRequired,
};
