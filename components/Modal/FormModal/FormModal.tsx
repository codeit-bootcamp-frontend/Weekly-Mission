"use client";

import { ReactNode } from "react";

import classNames from "classnames/bind";

import ModalFrame from "../ModalFrame";

import styles from "./FormModal.module.scss";

const cx = classNames.bind(styles);

interface FormModalProps {
  title: string;
  onClose: () => void;
  formComponent: ReactNode;
}

export default function FormModal({
  title,
  onClose,
  formComponent,
}: FormModalProps) {
  return (
    <ModalFrame onClose={onClose}>
      <div className={cx("container")}>
        <h3 className={cx("title")}>{title}</h3>
        {formComponent}
      </div>
    </ModalFrame>
  );
}
