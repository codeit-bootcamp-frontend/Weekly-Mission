"use client";

import classNames from "classnames/bind";
import styles from "@/styles/Option.module.css";
import Image from "next/image";
import { useState } from "react";
import ModalShare from "./ModalShare";

const cx = classNames.bind(styles);

export default function Option() {
  const [isModalShareOpen, setIsShareModalOpen] = useState(false);

  const handleModalShareOpen = () => {
    setIsShareModalOpen(!isModalShareOpen);
  };

  return (
    <>
      <div className={cx("option-container")}>
        <button type="button" onClick={handleModalShareOpen}>
          <Image src="/images/share.svg" alt="공유 아이콘" width={18} height={18} />
          공유
        </button>
        <button type="button" onClick={() => console.log("이름 변경")}>
          <Image src="/images/pen.svg" alt="이름 변경 아이콘" width={18} height={18} />
          이름 변경
        </button>
        <button type="button" onClick={() => console.log("삭제")}>
          <Image src="/images/delete.svg" alt="삭제 아이콘" width={18} height={18} />
          삭제
        </button>
      </div>
      {isModalShareOpen && <ModalShare onClose={setIsShareModalOpen} />}
    </>
  );
}
