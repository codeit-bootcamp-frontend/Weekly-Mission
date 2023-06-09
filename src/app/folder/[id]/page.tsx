"use client";

import React, { useState, useEffect, useRef } from "react";
import AddLink from "../AddLink/AddLink";
import styles from "../page.module.scss";
import SearchBar from "@/app/components/SearchBar/SearchBar";
import FolderChip from "../FolderChip/FolderChip";
import Image from "next/image";
import Option from "../Option/Option";
import LinkCardList from "@/app/components/LinkCardList/LinkCardList";
import useIsVisible from "../../hooks/useIsVisible";
import Modal, { ModalProps } from "@/app/components/Modals/Modal";
import ShareFolder from "@/app/components/Modals/ModalContents/ShareFolder";
import EditFolderName from "@/app/components/Modals/ModalContents/EditFolderName";
import AddFolder from "@/app/components/Modals/ModalContents/AddFolder";
import EmptyLinks from "@/app/components/LinkCardList/EmptyLinks";

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

const FOLDER_CHIP_LIST = [
  {
    id: "",
    href: "/folder/",
    label: "전체",
    selected: true,
  },
  {
    id: "favorites",
    href: "/folder/favorites",
    label: "⭐️ 즐겨찾기",
    selected: false,
  },
  {
    id: "1",
    href: "/folder/1",
    label: "코딩 팁",
    selected: false,
  },
  {
    id: "2",
    href: "/folder/2",
    label: "채용 사이트",
    selected: false,
  },
  {
    id: "3",
    href: "/folder/3",
    label: "유용한 글",
    selected: false,
  },
  {
    id: "4",
    href: "/folder/4",
    label: "나만의 장소",
    selected: false,
  },
];

const Page = ({ params }: { params: { id: string } }) => {
  const [cardListProps, setCardListProps] = useState([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const dummyRef = useRef(null);
  const isHeroVisible = useIsVisible(dummyRef);
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
    <main
      className={
        isHeroVisible
          ? styles.mainContainer
          : `${styles.mainContainer} ${styles.floating}`
      }
    >
      <section
        className={
          isHeroVisible
            ? styles.heroSection
            : `${styles.heroSection} ${styles.floating}`
        }
        ref={heroRef}
      >
        <div className={styles.addLinkContainer}>
          <AddLink />
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={styles.thresholdTarget} ref={dummyRef} />
        <div className={styles.contentsContainer}>
          <div className={styles.searchBarContainer}>
            <SearchBar
              placeholder="제목을 검색해 보세요"
              action="/search?q=null"
            />
          </div>
          <div className={styles.mainContentContainer}>
            <div className={styles.chipListRow}>
              <ul className={styles.chipListContainer}>
                {FOLDER_CHIP_LIST.map((chip, idx) => {
                  return (
                    <li key={idx}>
                      <FolderChip
                        href={chip.href}
                        label={chip.label}
                        selected={params.id === chip.id}
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
                  <Image src="/addIcon.svg" alt="add icon" fill />
                  <Image src="/addIcon-white.svg" alt="add icon" fill />
                </div>
              </button>
            </div>
            <div className={styles.titleRow}>
              <h2 className={styles.title}>
                {FOLDER_CHIP_LIST.find((item) => item.id === params.id)?.label}
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
          </div>
        </div>
      </section>
      <Modal {...modalProps} />
    </main>
  );
};

export default Page;
