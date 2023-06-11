"use client";

import { useState } from "react";

import ModalLayout from "../ModalLayout";
import styles from "./AddLinkModal.module.scss";
import FolderItem from "./FolderItem";

interface IAddModalProps {
  setOpenAddLinkModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLinkValue: string;
}

const MOCK_FOLDERS: { name: string; length: number }[] = [
  { name: "코딩팁", length: 7 },
  { name: "채용 사이트", length: 12 },
  { name: "유용한 글", length: 30 },
  { name: "나만의 장소", length: 3 },
];

const AddLinkModal = ({
  setOpenAddLinkModal,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectedLinkValue,
}: IAddModalProps) => {
  // TODO: api로 폴더 데이터를 받아오면 MOCK 데이터 삭제 예정

  const [checkedItemId, setCheckedItemId] = useState(-1);

  const handleClickPostLink = (): void => {
    // TODO: POST request : selectedLinkValue를 checkedItemId 를 가진 폴더에 저장
    // TODO: 바로 닫히지 않고, 데이터가 잘 저장되었다고 알려주는 텀이 있으면 좋겠다.
    setTimeout(() => {
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
        {MOCK_FOLDERS.map((folder, idx) => (
          <FolderItem
            key={folder.name}
            folder={folder}
            idx={idx}
            isChecked={idx === checkedItemId}
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
