import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "./add-link-bar.module.css";
import AddLinkModal from "@/components/Modals/AddLinkModal";
import { Folder } from "$/types";

interface AddLinkBarProps {
  tabs: Folder[];
}

const AddLinkBar: React.FC<AddLinkBarProps> = ({ tabs }) => {
  const linkInputRef = useRef<HTMLInputElement>(null);
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    value: string | undefined
  ) => {
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
        link={linkInputRef.current?.value ?? ""}
        tabs={tabs}
        clearInput={clearInput}
      />
    </>
  );
};

export default AddLinkBar;
