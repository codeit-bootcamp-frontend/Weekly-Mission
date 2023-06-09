"use client";

import { MouseEventHandler, useRef, useState } from "react";
import styles from "./LinkCard.module.scss";
import Image from "next/image";
import Popover from "../Popover/Popover";
import useOutsideClick from "@/app/hooks/useOutsideClick";
import FolderSelectList from "@/components/Modals/ModalContents/FolderSelectList";
import Modal, { ModalProps } from "@/components/Modals/Modal";

export interface LinkCardProp {
  id: number;
  href: string;
  thumbnailSrc?: string;
  createdDate: string;
  description: string;
}

const FOLDER_OPTIONS = [
  { title: "코딩팁", selected: false, linkCount: 7 },
  { title: "채용 사이트", selected: false, linkCount: 12 },
  { title: "유용한 글", selected: false, linkCount: 30 },
  { title: "나만의 장소", selected: true, linkCount: 3 },
];

const ADD_LINK_MODAL_PROPS = {
  type: "add",
  title: "폴더에 추가",
  subtitle: "링크 주소",
  ui: <FolderSelectList folders={FOLDER_OPTIONS} />,
  proceedBtnText: "추가하기",
};

const DELETE_LINK_MODAL_PROPS = {
  type: "delete",
  title: "링크 삭제",
  subtitle: "https://www.abc.com",
  proceedBtnText: "삭제하기",
};

const parseDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return [year, month, day].join(".");
};

const getTimeSinceCreation = (dateString: string) => {
  const updatedDate = new Date(dateString);
  const today = new Date();
  const timeDiff = today.getTime() - updatedDate.getTime();

  const MINUTE = 60 * 1000;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const MONTH = DAY * 31;

  const timeMap = {
    [MINUTE * 2]: () => "1 minute ago",
    [MINUTE * 59]: (diff: number) => Math.floor(diff / MINUTE) + " minutes ago",
    [HOUR * 2]: () => "1 hour ago",
    [HOUR * 23]: (diff: number) => Math.floor(diff / HOUR) + " hours ago",
    [DAY * 2]: () => "1 day ago",
    [DAY * 30]: (diff: number) => Math.floor(diff / DAY) + " days ago",
    [MONTH * 2]: () => "1 month ago",
    [MONTH * 12]: (diff: number) => Math.floor(diff / MONTH) + " months ago",
    [MONTH * 12 * 2]: () => "1 year ago",
  };

  const diff = Object.keys(timeMap).find((key) => timeDiff < Number(key));

  if (diff) {
    return timeMap[Number(diff)](timeDiff);
  }

  const years = Math.floor(timeDiff / (MONTH * 12));
  return years + " years ago";
};

const LinkCard = ({
  href,
  thumbnailSrc,
  createdDate,
  description,
}: LinkCardProp) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);
  const modalRef = useRef<HTMLDialogElement>(null);
  const [modalProps, setModalProps] = useState<ModalProps>({
    ...ADD_LINK_MODAL_PROPS,
    onClose: () => {},
    modalRef,
  });

  const handleClickOpenPopover: MouseEventHandler = (e) => {
    e.preventDefault();
    setShowPopover(true);
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

  const handleClickDelete = () => {
    setModalProps({
      ...DELETE_LINK_MODAL_PROPS,
      onClose: handleCloseModal,
      modalRef,
    });
    handleOpenModal();
  };

  const handleClickAdd = () => {
    setModalProps({
      ...ADD_LINK_MODAL_PROPS,
      onClose: handleCloseModal,
      modalRef,
    });
    handleOpenModal();
  };

  useOutsideClick(popoverRef, () => {
    setShowPopover(false);
  });

  return (
    <a id={styles["card-link"]} href={href} target="_blank">
      <div className={styles.cardContainer}>
        <div className={styles.thumbnailBox}>
          <Image
            className={styles.thumbnailImg}
            src={thumbnailSrc ?? "/default-thumbnail.svg"}
            alt="thumbnail"
            fill
          />
          <div
            className={styles.likeBtnBox}
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
          >
            <Image
              src={isLiked ? "/like-btn-liked.svg" : "/like-btn-unliked.svg"}
              alt="like button"
              fill
            />
          </div>
        </div>
        <div className={styles.metadataContainer}>
          <div className={styles.kebab} onClick={handleClickOpenPopover}>
            <Image src="/kebab.svg" alt="kebab" fill />
            {showPopover && (
              <div className={styles.popoverContainer} ref={popoverRef}>
                <Popover
                  onClickItem={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowPopover(false);
                  }}
                  onClickDelete={handleClickDelete}
                  onClickAdd={handleClickAdd}
                />
              </div>
            )}
          </div>
          <p className={styles.updatedTime}>
            {getTimeSinceCreation(createdDate)}
          </p>
          <div className={styles.descriptionContainer}>{description}</div>
          <p className={styles.date}>{parseDate(createdDate)}</p>
        </div>
      </div>
      <Modal {...modalProps} />
    </a>
  );
};

export default LinkCard;
