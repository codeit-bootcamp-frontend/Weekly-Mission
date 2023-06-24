"use client";

import { FormEvent, useState } from "react";

import classNames from "classnames/bind";

import { SelectedFolder } from "@/utils/api/types";

import styles from "./Form.module.scss";

const cx = classNames.bind(styles);

interface EditFormProps {
  folder: SelectedFolder;
  onClose: () => void;
  onSubmit: (name: string, id: number) => void;
}

export default function EditForm({ folder, onClose, onSubmit }: EditFormProps) {
  const [value, setValue] = useState(folder.name);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value) {
      alert("폴더 이름을 입력해 주세요!");
      return;
    }

    onSubmit(value, folder.id);
    onClose();
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form className={cx("form")} onSubmit={handleSubmit}>
      <input
        className={cx("input")}
        placeholder="내용 입력"
        value={value}
        onChange={handleChangeInput}
      />
      <button className={cx("button")} type="submit">
        변경하기
      </button>
    </form>
  );
}
