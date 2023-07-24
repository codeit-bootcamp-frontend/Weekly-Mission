"use client";

import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import styles from "@/styles/FAB.module.css";
import ModalAddFolder from "./ModalAddFolder";

const cx = classNames.bind(styles);

export default function FAB() {
  const [isModalAddFolderOpen, setIsModalAddFolderOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleAddFolder = () => {
    setIsModalAddFolderOpen(!isModalAddFolderOpen);
  };

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return (
    <>
      <button className={cx("folder-add-button")} onClick={handleAddFolder}>
        폴더 추가
        {isMobile ? (
          <Image src="/images/add_white.svg" alt="추가 아이콘" width={16} height={16} />
        ) : (
          <Image src="/images/add_primary.svg" alt="추가 아이콘" width={16} height={16} />
        )}
      </button>
      {isModalAddFolderOpen && <ModalAddFolder onClose={setIsModalAddFolderOpen} />}
    </>
  );
}
