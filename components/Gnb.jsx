import Link from "next/link";
import Image from "next/image";
import classNames from "classnames/bind";
import { SigninButton } from "@/components/Button";
import styles from "@/components/Gnb.module.css";

function UserProfile({ user }) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("profile-container")}>
      <div className={cx("user-image")}>
        <Image
          className={cx("image")}
          fill
          src={user.profileImageSource}
          alt={user.name}
        />
      </div>
      <div className={cx("user-email")}>{user.email}</div>
    </div>
  );
}

export default function Gnb({ user }) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("gnb-container")}>
      <div className={cx("gnb")}>
        <Link href="/">
          <img className={cx("logo")} src="/images/logo.png" alt="Linkbrary" />
        </Link>
        {user ? <UserProfile user={user} /> : <SigninButton />}
      </div>
    </div>
  );
}
