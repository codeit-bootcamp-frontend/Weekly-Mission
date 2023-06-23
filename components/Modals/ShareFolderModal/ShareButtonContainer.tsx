"use client";

import { useRouter } from "next/navigation";

import ShareButton from "./ShareButton";
import styles from "./ShareFolderModal.module.scss";

interface IShareButtonContainerProps {
  currentUserId: number | undefined;
  currentFolderId: number;
  handleClickCloseModal: () => void;
}

/**
 * @function ShareButtonContainer 공유 기능을 별도 container로 분리
 */
const ShareButtonContainer = ({
  currentUserId,
  currentFolderId,
  handleClickCloseModal,
}: IShareButtonContainerProps) => {
  const router = useRouter();

  const handleClickFacebookShare = () => {
    // TODO: 배포 주소로 변경하기
    window.open("http://www.facebook.com/sharer.php?u=https://www.naver.com/");

    setTimeout(() => {
      handleClickCloseModal();
    }, 500);
  };

  const handleClickClipboardShare = async () => {
    const sharedParams = `/shared?user=${currentUserId}&folder=${currentFolderId}`;
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(
        window.location.origin + sharedParams
      );
    }

    setTimeout(() => {
      router.push(sharedParams);
      handleClickCloseModal();
    }, 500);
  };

  const handleClickKaKaoShare = () => {
    // TODO: 환경변수 가능할 때, 카카오 기능 연결하기
    setTimeout(() => {
      handleClickCloseModal();
    }, 500);
  };

  return (
    <div className={styles.shareButtonContainer}>
      <ShareButton
        handleClickShare={handleClickKaKaoShare}
        imgName="share-kakaotalk.svg"
        imgAlt="share kakao"
        shareName="카카오톡"
      />
      <ShareButton
        handleClickShare={handleClickFacebookShare}
        imgName="share-facebook.svg"
        imgAlt="share facebook"
        shareName="페이스북"
      />
      <ShareButton
        handleClickShare={handleClickClipboardShare}
        imgName="share-clipboard.svg"
        imgAlt="copy link"
        shareName="링크 복사"
      />
    </div>
  );
};

export default ShareButtonContainer;
