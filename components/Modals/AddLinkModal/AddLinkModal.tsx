"use client";

import { useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import { IFolder, ILink } from "@/types/linkbrary";
import { createLink } from "@/utils/axios/linkRequest";

import ModalLayout from "../ModalLayout";
import styles from "./AddLinkModal.module.scss";
import FolderItem from "./FolderItem";

interface IAddLinkModalProps {
  userId: number;
  folders: IFolder[] | [];
  links: ILink[] | [];
  setOpenAddLinkModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLinkValue: string;
}

const AddLinkModal = ({
  userId,
  folders,
  links,
  setOpenAddLinkModal,
  selectedLinkValue,
}: IAddLinkModalProps) => {
  // 즐겨찾기의 경우 여기가 아니라 카드의 별을 통해서만 추가할 수 있다.

  const router = useRouter();
  const pathname = usePathname();
  const isEntire = pathname.split("/").length;
  const currentFolderId =
    isEntire === 2 ? 0 : Number(pathname.replace("/folder/", ""));
  const addFolderList = folders.filter(
    (folder) => folder.id !== currentFolderId
  );
  const [checkedItemId, setCheckedItemId] = useState(-1);

  const handleClickPostLink = (): void => {
    if (checkedItemId === -1) {
      selectedLinkValue && createLink(selectedLinkValue, userId);
    } else {
      const { id: selectedFolderId } = addFolderList[checkedItemId];
      selectedLinkValue &&
        createLink(selectedLinkValue, userId, selectedFolderId);
    }

    setTimeout(() => {
      router.refresh();
      setOpenAddLinkModal(false);
    }, 500);
  };

  return (
    <ModalLayout
      portalId="add-portal"
      handleClickCloseModal={() => setOpenAddLinkModal(false)}
    >
      <h3 className={styles.title}>폴더에 추가</h3>
      <h4 className={styles.subTitle}>링크 주소</h4>
      <div className={styles.folderWrapper}>
        {addFolderList.length === 0 && (
          <p className={styles.emptyLink}>다른 폴더가 존재하지 않아요</p>
        )}
        {addFolderList.length !== 0 &&
          addFolderList.map((folder, index) => (
            <FolderItem
              key={folder.name}
              folder={folder}
              links={links}
              index={index}
              isChecked={index === checkedItemId}
              setCheckedItemId={setCheckedItemId}
            />
          ))}
      </div>
      <button className={styles.addButton} onClick={handleClickPostLink}>
        추가하기
      </button>
    </ModalLayout>
  );
};

export default AddLinkModal;
