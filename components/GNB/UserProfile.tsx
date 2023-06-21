import classNames from "classnames/bind";
import Image from "next/image";

import { User } from "@/utils/api/types";

import styles from "./UserProfile.module.scss";

const cx = classNames.bind(styles);

export default function UserProfile({ user }: { user: User }) {
  return (
    <div className={cx("userContainer")}>
      <Image
        width={28}
        height={28}
        className={cx("userImg")}
        src={user.image_source}
        alt={user.name}
      />
      <p className={cx("userEmail")}>{user.email}</p>
    </div>
  );
}
