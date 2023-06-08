"use client";

import { useRef } from "react";

import ModalLayout from "../ModalLayout";
import styles from "./AddFolderModal.module.scss";

interface IAddFolderModal {
  setOpenAddFolderModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddFolderModal = ({ setOpenAddFolderModal }: IAddFolderModal) => {
  const folderNameRef = useRef<HTMLInputElement>(null);

  const handleClickAddFolder = () => {
    // TODO: input 데이터로 폴더명 전송
    if (!folderNameRef.current) return;
    // console.log(folderNameRef.current.value);

    const timer = setTimeout(() => {
      setOpenAddFolderModal(false);
      clearTimeout(timer);
    }, 500);
  };

  return (
    <ModalLayout
      portalId="add-folder-portal"
      handleClickCloseModal={() => setOpenAddFolderModal(false)}
    >
      <h3 className={styles.title}>폴더 추가</h3>
      <input
        ref={folderNameRef}
        className={styles.input}
        type="text"
        placeholder="내용 입력"
      />
      <div className={styles.buttonWrapper}>
        <button
          className={styles.addFolderButton}
          onClick={handleClickAddFolder}
        >
          추가하기
        </button>
      </div>
    </ModalLayout>
    // <ModalPortalWrapper id="add-folder-portal">
    //   <div
    //     className={styles.overlay}
    //     onClick={() => setOpenAddFolderModal(false)}
    //   >
    //     <div
    //       className={styles.modalWrapper}
    //       onClick={(e) => e.stopPropagation()}
    //     >
    //       <div
    //         className={styles.closeWrapper}
    //         onClick={() => setOpenAddFolderModal(false)}
    //       >
    //         <Image
    //           className={styles.image}
    //           fill
    //           src="/assets/modal-close.svg"
    //           alt="close modal"
    //         />
    //       </div>
    //       <div className={styles.contents}>
    //         <h3 className={styles.title}>폴더 추가</h3>
    //         <input
    //           ref={folderNameRef}
    //           className={styles.input}
    //           type="text"
    //           placeholder="내용 입력"
    //         />
    //         <div className={styles.buttonWrapper}>
    //           <button
    //             className={styles.addFolderButton}
    //             onClick={handleClickAddFolder}
    //           >
    //             추가하기
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </ModalPortalWrapper>
  );
};

export default AddFolderModal;
