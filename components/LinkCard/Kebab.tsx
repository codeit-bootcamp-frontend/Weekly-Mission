"use client";

import { ForwardedRef, forwardRef, useRef, useState } from "react";

import useOutsideClick from "@/hooks/useOutsideClick";

import AddLinkModal from "../Modals/AddLinkModal/AddLinkModal";
import DeleteLinkModal from "../Modals/DeleteLinkModal/DeleteLinkModal";
import styles from "./LinkCard.module.scss";

interface IKebabProps {
  linkUrl: string;
  isClickedKebab: boolean;
  handleClickOpenKebab: () => void;
  handleClickCloseKebab: () => void;
}

const Kebab = forwardRef(function Kebab(
  {
    linkUrl,
    isClickedKebab,
    handleClickOpenKebab,
    handleClickCloseKebab,
  }: IKebabProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const kebabRef = useRef<HTMLDivElement | null>(null);

  const [openDeleteLinkModal, setOpenDeleteLinkModal] =
    useState<boolean>(false);
  const [openAddLinkModal, setOpenAddLinkModal] = useState<boolean>(false);

  useOutsideClick(kebabRef, handleClickCloseKebab);
  return (
    <div ref={ref} className={styles.kebabMenu} onClick={handleClickOpenKebab}>
      <span className={styles.kebabDot}></span>
      <span className={styles.kebabDot}></span>
      <span className={styles.kebabDot}></span>
      {isClickedKebab && (
        <div className={styles.popOverWrapper} ref={kebabRef}>
          <div
            className={styles.deleteButton}
            onClick={() => setOpenDeleteLinkModal(true)}
          >
            삭제하기
          </div>
          <div
            className={styles.addFolderButton}
            onClick={() => setOpenAddLinkModal(true)}
          >
            폴더에 추가
          </div>
        </div>
      )}

      {openAddLinkModal && (
        <AddLinkModal
          setOpenAddLinkModal={setOpenAddLinkModal}
          selectedLinkValue={linkUrl}
        />
      )}
      {openDeleteLinkModal && (
        <DeleteLinkModal
          setOpenDeleteLinkModal={setOpenDeleteLinkModal}
          selectedLinkValue={linkUrl}
        />
      )}
    </div>
  );
});

export default Kebab;
