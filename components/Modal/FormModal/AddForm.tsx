"use client";

import { FormEvent, useState } from "react";

import classNames from "classnames/bind";

import styles from "./Form.module.scss";

const cx = classNames.bind(styles);

interface AddFormProps {
  onClose: () => void;
  onSubmit: (name: string) => void;
}

export default function AddForm({ onClose, onSubmit }: AddFormProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value) {
      alert("폴더 이름을 입력해 주세요!");
      return;
    }

    onSubmit(value);
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
        추가하기
      </button>
    </form>
  );
}
