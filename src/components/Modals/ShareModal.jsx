import React, { useState, useRef } from "react";
import ModalContainer from "@/components/Modals/ModalContainer";
import Image from "next/image";
import styles from "./share-modal.module.css";

const ShareModal = ({
  isFolderShareModalOpen,
  onClose,
  currentFolderTitle,
}) => {
  const handleClickFacebookShare = () => {
    window.open("http://www.facebook.com/sharer.php?u=https://www.codeit.kr/");
    onClose();
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch (error) {
      throw Error;
    }
  };

  const handleClickClipboardShare = async () => {
    copyToClipboard();
    onClose();
  };

  const handleClickKaKaoShare = () => {
    // TODO: 카카오 공유 하기
    onClose();
  };

  return (
    <ModalContainer
      modalTitle="폴더 공유"
      modalSubTitle={currentFolderTitle}
      isOpen={isFolderShareModalOpen}
      onClose={onClose}
    >
      <div className={styles.shareOptions}>
        <button className={styles.button} onClick={handleClickKaKaoShare}>
          <div className={styles.imageContainer}>
            <Image
              fill
              src="/assets/images/kakaotalk-icon.svg"
              alt="share kakao"
            />
          </div>
          <span className={styles.text}>카카오톡</span>
        </button>
        <button className={styles.button} onClick={handleClickFacebookShare}>
          <div className={styles.facebookWrap}>
            <div className={styles.iconContainer}>
              <Image
                className={styles.icon}
                fill
                src="/assets/images/facebook.svg"
                alt="share facebook"
              />
            </div>
          </div>
          <span className={styles.text}>페이스북</span>
        </button>
        <button className={styles.button} onClick={handleClickClipboardShare}>
          <div className={styles.iconContainer}>
            <div className={styles.linkWrap}>
              <Image
                fill
                className={styles.icon}
                src="/assets/images/folder-link.svg"
                alt="copy link"
              />
            </div>
          </div>
          <span className={styles.text}>링크 복사</span>
        </button>
      </div>
    </ModalContainer>
  );
};

export default ShareModal;
