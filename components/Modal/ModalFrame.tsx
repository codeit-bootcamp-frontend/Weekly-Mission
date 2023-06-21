"use client";

import { useEffect, useRef } from "react";

import classNames from "classnames/bind";
import Image from "next/image";

import { Children } from "@/types";

import styles from "./ModalFrame.module.scss";
import ModalPortal from "./ModalPortal";

import closeImage from "@/public/images/close.svg";

const cx = classNames.bind(styles);

interface ModalFrameProps extends Children {
  onClose: () => void;
}

export default function ModalFrame({ children, onClose }: ModalFrameProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <ModalPortal>
      <div className={cx("overlay")}>
        <div className={cx("container")} ref={modalRef}>
          <button className={cx("closeButton")} onClick={onClose}>
            <Image width={24} height={24} src={closeImage} alt="close" />
          </button>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
}
