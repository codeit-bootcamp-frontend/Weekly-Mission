import React, { useRef, useState } from "react";

import Image from "next/image";

import AddModal from "@/components/Modals/AddModal";
import styles from "./add-link-bar.module.css";

const AddLinkBar = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [selectedLinkValue, setSelectedLinkValue] = useState("");
  const linkInputRef = useRef(null);

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.linkContainer}>
          <div className={styles.linkIconContainer}>
            <Image
              className={styles.image}
              alt="link icon"
              src="/assets/images/folder-link.svg"
              fill
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              placeholder="링크를 추가해 보세요"
              ref={linkInputRef}
            />
          </div>
        </div>
        <button className={styles.button} type="submit">
          추가하기
        </button>
      </form>

      {openAddModal && (
        <AddModal
          setOpenAddModal={setOpenAddModal}
          selectedLinkValue={selectedLinkValue}
        />
      )}
    </div>
  );
};

export default AddLinkBar;
