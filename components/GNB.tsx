import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/GNB.module.css";
import classNames from "classnames/bind";

type GNBProps = {
  userEmail: string;
  userProfileImageSorce: string;
};

const cx = classNames.bind(styles);

export default function GNB({ userEmail, userProfileImageSorce = "/images/default_profile_image.svg" }: GNBProps) {
  return (
    <nav className={cx("gnb")}>
      <Link className={cx("linkbrary-logo")} href="/">
        <Image className={cx("linkbrary-logo-image")} src="/images/linkbrary.svg" alt="linkbrary 로고 이미지" width={133} height={24} />
      </Link>
      {userEmail ? (
        <div className={cx("profile-container")}>
          <Image className={cx("profile-image")} src={userProfileImageSorce} alt="프로필 이미지" width={28} height={28} />
          <span className={cx("profile-email")}>{userEmail}</span>
        </div>
      ) : (
        <Link className={cx("login-button")} href="/">
          로그인
        </Link>
      )}
    </nav>
  );
}
