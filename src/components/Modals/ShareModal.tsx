import React from "react";
import ModalContainer from "@/components/Modals/ModalContainer";
import Image from "next/image";
import styles from "./share-modal.module.css";
import { userId } from "$/src/utils/common.api";

interface ShareModalProps {
  isFolderShareModalOpen: boolean;
  onClose: () => void;
  currentFolderTitle: string;
  currentTabId: number;
}

const ShareModal = ({
  isFolderShareModalOpen,
  onClose,
  currentFolderTitle,
  currentTabId,
}: ShareModalProps) => {
  const handleClickFacebookShare = () => {
    window.open("http://www.facebook.com/sharer.php?u=https://www.codeit.kr/");
    onClose();
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.host + `/shared?user=${userId}&folder=${currentTabId}`
      );
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
              src="/assets/images/kakaotalk-icon.svg"
              alt="share kakao"
              width={20}
              height={20}
            />
          </div>
          <span className={styles.text}>카카오톡</span>
        </button>
        <button className={styles.button} onClick={handleClickFacebookShare}>
          <div className={styles.facebookWrap}>
            <div className={styles.iconContainer}>
              <Image
                className={styles.icon}
                src="/assets/images/facebook.svg"
                alt="share facebook"
                width={20}
                height={20}
              />
            </div>
          </div>
          <span className={styles.text}>페이스북</span>
        </button>
        <button className={styles.button} onClick={handleClickClipboardShare}>
          <div className={styles.iconContainer}>
            <div className={styles.linkWrap}>
              <Image
                src="/assets/images/folder-link.svg"
                alt="copy link"
                width={20}
                height={20}
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
