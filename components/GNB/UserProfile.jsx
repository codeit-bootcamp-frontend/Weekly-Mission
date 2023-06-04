import classNames from "classnames/bind";
import Image from "next/image";
import PropTypes from "prop-types";

import styles from "./UserProfile.module.scss";

const cx = classNames.bind(styles);

export default function UserProfile({ user }) {
  return (
    <div className={cx("userContainer")}>
      <Image
        width={28}
        height={28}
        className={cx("userImg")}
        src={user.profileImageSource}
        alt={user.name}
      />
      <p className={cx("userEmail")}>{user.email}</p>
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};
