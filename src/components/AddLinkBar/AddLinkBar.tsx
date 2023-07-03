import React, { useRef, useState, useEffect, useContext } from "react";
import Image from "next/image";
import styles from "./add-link-bar.module.css";
import AddLinkModal from "@/components/Modals/AddLinkModal";
import useElementPosition from "@/hooks/useElementPosition";
import AddLinkBarBottomContext from "@/contexts/AddLinkBarBottomContext";

const AddLinkBar = () => {
  const linkInputRef = useRef<HTMLInputElement>(null);
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  const elementPosition = useElementPosition(inputRef);

  const { isAddLinkBarBottom, setIsAddLinkBarBottom } = useContext(
    AddLinkBarBottomContext
  );
  useEffect(() => {
    if (!elementPosition) return;
    if (elementPosition <= 0) {
      setIsAddLinkBarBottom(true);
    } else {
      setIsAddLinkBarBottom(false);
    }
  }, [elementPosition, isAddLinkBarBottom, setIsAddLinkBarBottom]);

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
    <div ref={inputRef}>
      <div
        className={`${styles.formContainer} ${
          elementPosition && elementPosition <= 0 ? styles.fixedBottom : ""
        }`}
      >
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
        clearInput={clearInput}
      />
    </div>
  );
};

export default AddLinkBar;
