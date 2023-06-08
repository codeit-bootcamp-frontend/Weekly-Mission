"use client";

import ModalLayout from "../ModalLayout";
import styles from "./DeleteLinkModal.module.scss";

interface IDeleteLinkModal {
  setOpenDeleteLinkModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLinkValue: string;
}

const DeleteLinkModal = ({
  setOpenDeleteLinkModal,
  selectedLinkValue,
}: IDeleteLinkModal) => {
  const handleClickDeleteLink = () => {
    // TODO: 해당 link를 폴더에서 삭제, 어떤 폴더인지 알아야 하므로 나중에 폴더 식별할 수 있는 Prop 추가하기
    const timer = setTimeout(() => {
      setOpenDeleteLinkModal(false);
      clearTimeout(timer);
    }, 500);
  };

  return (
    <ModalLayout
      portalId="delete-link-portal"
      handleClickCloseModal={() => setOpenDeleteLinkModal(false)}
    >
      <h3 className={styles.title}>링크 삭제</h3>
      <h4 className={styles.subTitle}>{selectedLinkValue}</h4>
      <button className={styles.deleteButton} onClick={handleClickDeleteLink}>
        삭제하기
      </button>
    </ModalLayout>
  );
};

export default DeleteLinkModal;
