"use client";

import { useState } from "react";
import styles from "./AddFolder.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";
import TextInput from "@/components/TextInput/TextInput";
import axios from "axios";
import { postFolder } from "@/api/instance";
import { useRouter } from "next/navigation";

const cx = classNames.bind(styles);

export default function AddFolder({ updateFolderState }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const userId = "64992eec930d7d6257c06f19";

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const addFolder = async () => {
    let newFolder = await postFolder(inputValue, userId);
    updateFolderState(newFolder);
  };

  //   const addFolder = () => {
  //   axios
  //     .post("/api/folders", { name: inputValue, userId })
  //     .then(() => {
  //       // router.refresh();

  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const addFolder = () => {
  //   axios
  //     .post("/api/folders", { name: inputValue })
  //     .then(() => {
  //       router.refresh();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const modalProps = {
    title: "폴더 추가",
    subtitle: "",
    content: <TextInput onInputChange={handleInputChange} />,
    button: {
      content: "추가하기",
      color: "blue",
      handleButton: addFolder,
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
