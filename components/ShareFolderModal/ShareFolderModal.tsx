"use client";

import { useEffect } from "react";

import Image from "next/image";

import ModalLayout from "components/Common/ModalLayout";
import { allowScroll, preventScroll } from "lib/modal";

import styles from "./ShareFolderModal.module.scss";

interface IShareFolderModal {
  setOpenShareFolderModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentFolderName: string;
}

const ShareFolderModal = ({
  setOpenShareFolderModal,
  currentFolderName,
}: IShareFolderModal) => {
  const handleClickFacebookShare = () => {
    window.open("http://www.facebook.com/sharer.php?u=https://www.naver.com/");

    const timer = setTimeout(() => {
      setOpenShareFolderModal(false);
      clearTimeout(timer);
    }, 500);
  };

  const handleClickClipboardShare = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(window.location.href);
    }

    const timer = setTimeout(() => {
      setOpenShareFolderModal(false);
      clearTimeout(timer);
    }, 500);
  };

  const handleClickKaKaoShare = () => {
    // TODO: 카카오 기능 연결하기
    const timer = setTimeout(() => {
      setOpenShareFolderModal(false);
      clearTimeout(timer);
    }, 500);
  };

  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);
  return (
    <ModalLayout
      portalId="share-folder-portal"
      handleClickCloseModal={() => setOpenShareFolderModal(false)}
    >
      <h3 className={styles.title}>폴더 공유</h3>
      <h4 className={styles.subTitle}>{currentFolderName}</h4>
      <div className={styles.shareOptions}>
        <button className={styles.button} onClick={handleClickKaKaoShare}>
          <div className={styles.imageWrapper}>
            <Image
              fill
              className={styles.image}
              src="/assets/share-kakaotalk.svg"
              alt="share kakao"
            />
          </div>
          <span className={styles.text}>카카오톡</span>
        </button>
        <button className={styles.button} onClick={handleClickFacebookShare}>
          <div className={styles.imageWrapper}>
            <Image
              fill
              className={styles.image}
              src="/assets/share-facebook.svg"
              alt="share facebook"
            />
          </div>
          <span className={styles.text}>페이스북</span>
        </button>
        <button className={styles.button} onClick={handleClickClipboardShare}>
          <div className={styles.imageWrapper}>
            <Image
              fill
              className={styles.image}
              src="/assets/share-clipboard.svg"
              alt="copy link"
            />
          </div>
          <span className={styles.text}>링크 복사</span>
        </button>
      </div>
    </ModalLayout>
  );
};

export default ShareFolderModal;
