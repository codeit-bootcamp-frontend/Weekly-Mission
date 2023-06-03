"use client";

import React, { useEffect } from "react";

import Image from "next/image";

import { allowScroll, preventScroll } from "@/lib/modal";

import styles from "./ShareFolderModal.module.css";
import ShareFolderPortalWrapper from "./ShareFolderPortalWrapper";

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
    <ShareFolderPortalWrapper>
      <div
        className={styles.overlay}
        onClick={() => setOpenShareFolderModal(false)}
      >
        <div
          className={styles.modalWrapper}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={styles.closeWrapper}
            onClick={() => setOpenShareFolderModal(false)}
          >
            <Image
              className={styles.image}
              fill
              src="/assets/modal-close.svg"
              alt="close modal"
            />
          </div>
          <div className={styles.contents}>
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
              <button
                className={styles.button}
                onClick={handleClickFacebookShare}
              >
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
              <button
                className={styles.button}
                onClick={handleClickClipboardShare}
              >
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
          </div>
        </div>
      </div>
    </ShareFolderPortalWrapper>
  );
};

export default ShareFolderModal;
