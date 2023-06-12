"use client";

import React, { Suspense, use, useRef, useState } from "react";
import styles from "./MainContent.module.scss";
import FolderChip from "../FolderChip/FolderChip";
import Modal, { ModalProps } from "@/app/components/Modals/Modal";
import { getFoldersByUserId } from "@/lib/api/folderApi";
import ShareFolder from "@/app/components/Modals/ModalContents/ShareFolder";
import EditFolderName from "@/app/components/Modals/ModalContents/EditFolderName";
import AddFolder from "@/app/components/Modals/ModalContents/AddFolder";
import { Folder } from "@/app/types/types";
import Image from "next/image";
import Option from "../Option/Option";
import LinkCardList from "@/app/components/LinkCardList/LinkCardList";
import EmptyLinks from "@/app/components/LinkCardList/EmptyLinks";
import Loader from "@/app/components/Loader/Loader";

const DELETE_FOLDER_MODAL_PROPS = {
  type: "delete",
  title: "폴더 삭제",
  subtitle: "폴더명",
  proceedBtnText: "삭제하기",
};

const SHARE_FOLDER_MODAL_PROPS = {
  type: "share",
  title: "폴더 공유",
  subtitle: "폴더명",
};

const EDIT_FOLDER_MODAL_PROPS = {
  type: "edit",
  title: "폴더 이름 변경",
  proceedBtnText: "변경하기",
};

const ADD_FOLDER_MODAL_PROPS = {
  type: "add",
  title: "폴더 추가",
  proceedBtnText: "추가하기",
};

const getFolderList = async (userId: number) => {
  const res = await getFoldersByUserId(String(userId));
  return res.data as Folder[];
};

interface MainContentProps {
  folderId: number;
  userId: number;
}

const MainContent = ({ userId, folderId }: MainContentProps) => {
  const [cardListProps, setCardListProps] = useState([]);
  const folderList = use(getFolderList(userId));
  const modalRef = useRef<HTMLDialogElement>(null);
  const [modalProps, setModalProps] = useState<ModalProps>({
    ...SHARE_FOLDER_MODAL_PROPS,
    modalRef,
    onClose: () => {},
  });
  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const handleClickShareFolder = () => {
    setModalProps({
      ...SHARE_FOLDER_MODAL_PROPS,
      ui: (
        <ShareFolder
          folderInfo={{ title: "즐겨찾기", link: "https://www.abc.com" }}
        />
      ),
      onClose: handleCloseModal,
      modalRef,
    });
  };

  const handleClickEditFolder = () => {
    setModalProps({
      ...EDIT_FOLDER_MODAL_PROPS,
      ui: <EditFolderName folderName="유용한 팁" />,
      onClose: handleCloseModal,
      modalRef,
    });
  };

  const handleClickDeleteFolder = () => {
    setModalProps({
      ...DELETE_FOLDER_MODAL_PROPS,
      onClose: handleCloseModal,
      modalRef,
    });
  };

  const handleClickAddFolder = () => {
    setModalProps({
      ...ADD_FOLDER_MODAL_PROPS,
      ui: <AddFolder />,
      modalRef,
      onClose: handleCloseModal,
    });
  };

  return (
    <div className={styles.mainContentContainer}>
      <div className={styles.chipListRow}>
        <ul className={styles.chipListContainer}>
          <li>
            <FolderChip href="/folder" label="전체" selected={folderId === 0} />
          </li>
          {folderList.map((folder: Folder) => {
            return (
              <li key={folder.id}>
                <FolderChip
                  href={`/folder/${folder.id}`}
                  label={folder.name}
                  selected={folderId === folder.id}
                />
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          className={styles.addFolderButton}
          onClick={() => {
            handleClickAddFolder();
            handleOpenModal();
          }}
        >
          <span>폴더 추가</span>
          <div className={styles.addIconBox}>
            <Image src="/addIcon.svg" alt="add icon" fill sizes="32vw" />
            <Image src="/addIcon-white.svg" alt="add icon" fill sizes="32vw" />
          </div>
        </button>
      </div>
      <Suspense fallback={<Loader />}>
        <div className={styles.titleRow}>
          <h2 className={styles.title}>
            {folderId > 0
              ? folderList.find((folder: Folder) => folder.id === folderId)
                  ?.name ?? "제목없음"
              : "전체"}
          </h2>
          <ul className={styles.optionListContainer}>
            <li>
              <Option
                imgSrc="/shareIcon.svg"
                label="공유"
                onClick={() => {
                  handleClickShareFolder();
                  handleOpenModal();
                }}
              ></Option>
            </li>
            <li>
              <Option
                imgSrc="/pencilIcon.svg"
                label="이름 변경"
                onClick={() => {
                  handleClickEditFolder();
                  handleOpenModal();
                }}
              ></Option>
            </li>
            <li>
              <Option
                imgSrc="/deleteIcon.svg"
                label="삭제"
                onClick={() => {
                  handleClickDeleteFolder();
                  handleOpenModal();
                }}
              ></Option>
            </li>
          </ul>
        </div>
        <article className={styles.cardList}>
          {cardListProps.length > 0 ? (
            <LinkCardList cardDataList={cardListProps} />
          ) : (
            <EmptyLinks />
          )}
        </article>
      </Suspense>
      <Modal {...modalProps} />
    </div>
  );
};

export default MainContent;
