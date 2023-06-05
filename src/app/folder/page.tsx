"use client";

import React, { useState, useEffect, useRef } from "react";
import AddLink from "./components/AddLink/AddLink";
import styles from "./page.module.scss";
import SearchBar from "@/components/SearchBar/SearchBar";
import FolderChip from "./components/FolderChip/FolderChip";
import Image from "next/image";
import Option from "./components/Option/Option";
import LinkCardList from "@/components/LinkCardList/LinkCardList";
import { getFolderRequest } from "@/lib/api/folderApi";
import useIsVisible from "../hooks/useIsVisible";
import useMediaQuery from "../hooks/useMediaQuery";
import Modal, { ModalProps } from "@/components/Modals/Modal";
import ShareFolder from "@/components/Modals/ModalContents/ShareFolder";
import EditFolderName from "@/components/Modals/ModalContents/EditFolderName";
import AddFolder from "@/components/Modals/ModalContents/AddFolder";

const FOLDER_CHIP_LIST = [
  {
    href: "https://codeit.kr",
    label: "전체",
    selected: true,
  },
  {
    href: "https://codeit.kr",
    label: "⭐️ 즐겨찾기",
    selected: false,
  },
  {
    href: "https://codeit.kr",
    label: "코딩 팁",
    selected: false,
  },
  {
    href: "https://codeit.kr",
    label: "채용 사이트",
    selected: false,
  },
  {
    href: "https://codeit.kr",
    label: "유용한 글",
    selected: false,
  },
  {
    href: "https://codeit.kr",
    label: "나만의 장소",
    selected: false,
  },
];

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

const Page = () => {
  const [cardListProps, setCardListProps] = useState([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isHeroVisible = useIsVisible(isMobile ? 182 : 314);
  const modalRef = useRef<HTMLDialogElement>(null);
  const [modalProps, setModalProps] = useState<ModalProps>({
    ...SHARE_FOLDER_MODAL_PROPS,
    modalRef,
    onClose: () => {},
  });
  const getCardListProps = (dataList: any) => {
    return dataList.map((data: any) => {
      return {
        id: data.id,
        href: data.url,
        thumbnailSrc: data.imageSource,
        description: data.description,
        createdDate: data.createdAt,
      };
    });
  };

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

  useEffect(() => {
    getFolderRequest()
      .then((res) => res.data)
      .then((res) => {
        setCardListProps(getCardListProps(res.folder.links));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                        selected={chip.selected}
                      />
                    </li>
                  );
                })}
              </ul>
              <button
                type="button"
                className={styles.addFolderButton}
                onClick={() => {
                  handleClickShareFolder();
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
              <h2 className={styles.title}>전체</h2>
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
              <LinkCardList cardDataList={cardListProps} />
            </article>
          </div>
        </div>
      </section>
      <Modal {...modalProps} />
    </main>
  );
};

export default Page;
