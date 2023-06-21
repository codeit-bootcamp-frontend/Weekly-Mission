"use client";

import { FormEvent, useState } from "react";

import classNames from "classnames/bind";

import { SelectedFolder } from "@/utils/api/types";

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

interface FormModalProps {
  folder?: SelectedFolder;
  onClose: () => void;
  onSubmit: (name: string) => string;
}

export default function FormModal({
  folder,
  onClose,
  onSubmit,
}: FormModalProps) {
  const type = folder ? "edit" : "add";
  const [value, setValue] = useState(folder ? folder.name : "");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(value);
    onClose();
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <ModalFrame onClose={onClose}>
      <div className={cx("container")}>
        <h3 className={cx("title")}>{formModalMap[type].title}</h3>
        <form className={cx("form")} onSubmit={handleSubmit}>
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
