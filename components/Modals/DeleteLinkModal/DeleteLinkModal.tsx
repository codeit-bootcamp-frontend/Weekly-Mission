"use client";

import { useRouter } from "next/navigation";

import { deleteLink } from "@/lib/axios/linkRequest";

import ModalLayout from "../ModalLayout";
import styles from "./DeleteLinkModal.module.scss";

interface IDeleteLinkModalProps {
  linkId: number;
  setOpenDeleteLinkModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLinkValue: string;
}

const DeleteLinkModal = ({
  linkId,
  setOpenDeleteLinkModal,
  selectedLinkValue,
}: IDeleteLinkModalProps) => {
  const router = useRouter();
  const handleClickDeleteLink = async () => {
    await deleteLink(linkId);

    setTimeout(() => {
      router.refresh();
      setOpenDeleteLinkModal(false);
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
