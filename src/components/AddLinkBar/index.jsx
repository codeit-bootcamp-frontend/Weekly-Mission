import React, { useRef, useState } from "react";

import Image from "next/image";

import styles from "./add-link-bar.module.css";
import AddLinkModal from "@/components/Modals/AddLinkModal";

const AddLinkBar = ({ tabs }) => {
  const linkInputRef = useRef(null);
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);
  console.log(linkInputRef);

  const handleClick = (e, value) => {
    e.preventDefault();
    if (!value) return;
    setIsAddLinkModalOpen(true);
  };

  const clearInput = () => {
    if (linkInputRef.current) {
      linkInputRef.current.value = "";
    }
  };
  return (
    <>
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
          <button
            className={styles.button}
            type="submit"
            onClick={(e) => handleClick(e, linkInputRef.current?.value)}
          >
            추가하기
          </button>
        </form>
      </div>

      <AddLinkModal
        isAddLinkModalOpen={isAddLinkModalOpen}
        onClose={() => {
          setIsAddLinkModalOpen(false);
        }}
        link={linkInputRef.current?.value}
        tabs={tabs}
        clearInput={clearInput}
      />
    </>
  );
};

export default AddLinkBar;
