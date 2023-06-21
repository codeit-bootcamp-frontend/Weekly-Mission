import Image from "next/image";
import styles from "./Header.module.scss";

const DEFAULT_PROFILE_IMG_SRC = "/profile_img.png";

interface UserAccountInfoProps {
  email: string;
  profileImgSrc: string;
}

const UserAccountInfo = ({ email, profileImgSrc }: UserAccountInfoProps) => {
  return (
    <div className={styles.myAccount}>
      <div className={styles.profileContainer}>
        <Image
          src={profileImgSrc ?? DEFAULT_PROFILE_IMG_SRC}
          alt="profile image"
          fill
          sizes="64vw"
        />
      </div>
      <div className={styles.usernameContainer}>{email}</div>
    </div>
  );
};

export default UserAccountInfo;
