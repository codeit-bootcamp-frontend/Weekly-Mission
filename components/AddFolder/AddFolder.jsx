"use client";

import { useState } from "react";
import styles from "./AddFolder.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";
import TextInput from "@/components/TextInput/TextInput";
import axios from "axios";

const cx = classNames.bind(styles);

export default function AddFolder() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const addFolder = () => {
    axios
      .post("/api/post", { name: inputValue })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const modalProps = {
    title: "폴더 추가",
    subtitle: "",
    content: <TextInput onInputChange={handleInputChange} />,
    button: {
      content: "추가하기",
      color: "blue",
      addFolder,
    },
  };

  return (
    <>
      <button onClick={handleOpenModal} className={cx("add-button")}>
        <p>폴더 추가</p>
        <Image src="/assets/add.svg" alt="add-icon" width={16} height={16} />
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} {...modalProps} />
    </>
  );
}
