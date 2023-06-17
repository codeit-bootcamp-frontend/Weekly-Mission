"use client";
import { useState } from "react";
import styles from "@components/AddPage.module.css";
import UpdateModal from "@layout/UpdateModal";

const AddLinkBtn = () => {
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(!modal);
  };
  return (
    <>
      <div>
        <button
          onClick={modalHandler}
          className={styles["add-folder"]}
          type="button"
        >
          폴더 추가 +
        </button>
      </div>
      {modal && (
        <UpdateModal
          modal={modal}
          modalHandler={modalHandler}
          content="폴더 추가"
          placeholder="내용 입력"
        />
      )}
    </>
  );
};

export default AddLinkBtn;
