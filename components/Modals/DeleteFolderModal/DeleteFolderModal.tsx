"use clinet";

import { useRouter } from "next/navigation";

import { deleteFolder } from "@/lib/axios/folderRequest";
import { IFolder } from "@/types/linkbrary";

import ModalLayout from "../ModalLayout";
import styles from "./DeleteFolderModal.module.scss";

interface IDeleteFolderModalProps {
  handleCloseModal: () => void;
  currentFolder: IFolder;
}

const DeleteFolderModal = ({
  handleCloseModal,
  currentFolder,
}: IDeleteFolderModalProps) => {
  const router = useRouter();
  const { id: currentFolderId, name: currentFolderName } = currentFolder;

  const handleClickDeleteFolder = async () => {
    // TODO: 정말로 삭제할지 확인 문구 작성
    await deleteFolder(currentFolderId);

    setTimeout(() => {
      router.push("/folder");
      handleCloseModal();
    }, 500);
  };

  return (
    <ModalLayout
      portalId="delete-folder-portal"
      handleClickCloseModal={handleCloseModal}
    >
      <h3 className={styles.title}>폴더 삭제</h3>
      <h4 className={styles.subTitle}>{currentFolderName}</h4>
      <button className={styles.deleteButton} onClick={handleClickDeleteFolder}>
        삭제하기
      </button>
    </ModalLayout>
  );
};

export default DeleteFolderModal;
