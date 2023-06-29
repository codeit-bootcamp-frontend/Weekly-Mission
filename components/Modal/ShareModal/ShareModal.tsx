"use client";

import { useEffect } from "react";

import classNames from "classnames/bind";
import Image from "next/image";

import { useCurrentUser } from "@/hooks/useCurrentUserContext";
import { SelectedFolder } from "@/utils/api/types";
import createKaKaoShareButton from "@/utils/createKakaoShareButton";

import ModalFrame from "../ModalFrame";

import styles from "./ShareModal.module.scss";

import copyLink from "@/public/images/copy-link.svg";
import facebook from "@/public/images/sns-logo-facebook-color.svg";
import kakaotalk from "@/public/images/sns-logo-kakaotalk.svg";

const cx = classNames.bind(styles);

interface ShareModalProps {
  folder: SelectedFolder;
  onClose: () => void;
}

export default function ShareModal({ folder, onClose }: ShareModalProps) {
  const { id: userId, name: userName } = useCurrentUser();

  const baseURL =
    // CHECK: 서버 URL
    "https://weekly-mission-git-ian-react-week14-codeit-bootcamp.vercel.app";
  const sharedURL = `${baseURL}/shared?user=${userId}&folder=${folder.id}`;

  const handleClickFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        sharedURL,
      )}`,
    );
  };

  const handleClickCopyLink = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(sharedURL);
    }
  };

  useEffect(() => {
    createKaKaoShareButton(sharedURL, userName, folder.name);
  }, [sharedURL, folder.name, userName]);

  return (
    <ModalFrame onClose={onClose}>
      <div className={cx("container")}>
        <div className={cx("textContainer")}>
          <h3 className={cx("title")}>폴더 공유</h3>
          <p className={cx("content")}>{folder.name}</p>
        </div>
        <div className={cx("utils")}>
          <div className={cx("util")}>
            <button id="kakao-link-btn">
              <Image width={42} height={42} src={kakaotalk} alt="카카오톡" />
            </button>
            <p className={cx("name")}>카카오톡</p>
          </div>
          <div className={cx("util")}>
            <button onClick={handleClickFacebookShare}>
              <Image width={42} height={42} src={facebook} alt="페이스북" />
            </button>
            <p className={cx("name")}>페이스북</p>
          </div>
          <div className={cx("util")}>
            <button onClick={handleClickCopyLink}>
              <div className={cx("copyLink")}>
                <Image width={18} height={18} src={copyLink} alt="링크 복사" />
              </div>
            </button>
            <p className={cx("name")}>링크 복사</p>
          </div>
        </div>
      </div>
    </ModalFrame>
  );
}
