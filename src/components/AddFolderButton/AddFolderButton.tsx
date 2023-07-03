import Image from "next/image";
import { useState } from "react";
import styles from "./add-folder-button.module.css";
import AddFolderModal from "../Modals/AddFolderModal";

const AddFolderButton = ({
  isAddLinkBarBottom,
}: {
  isAddLinkBarBottom: boolean;
}) => {
  const [isAddFolderModalOpen, setIsAddFolderModalOpen] =
    useState<boolean>(false);

  return (
    <>
      <button
        className={`${styles.buttonWrapper} ${
          isAddLinkBarBottom ? "" : styles.addLinkVarAtBottom
        }`}
        onClick={() => setIsAddFolderModalOpen(true)}
      >
        <span className={styles.buttonText}>폴더 추가</span>
        <div className={styles.ImageWrapper}>
          <Image
            className={styles.image}
            fill
            src="/assets/images/add-folder.svg"
            alt="add folder"
          />
        </div>
      </button>
      <AddFolderModal
        isAddFolderModalOpen={isAddFolderModalOpen}
        onClose={() => setIsAddFolderModalOpen(false)}
      />
    </>
  );
};

export default AddFolderButton;
