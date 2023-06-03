import classNames from "classnames/bind";
import Image from "next/image";
import PropTypes from "prop-types";

import styles from "./FolderInfo.module.scss";

const cx = classNames.bind(styles);

export default function FolderInfo({ folder }) {
  return (
    <header className={cx("headerFolder")}>
      <div className={cx("ownerContainer")}>
        <div className={cx("imgContainer")}>
          <Image
            fill
            src={folder.owner.profileImageSource}
            alt="폴더 사용자 프로필 이미지"
          />
        </div>
        <p className={cx("ownerName")}>{`@${folder.owner.name}`}</p>
      </div>
      <h1 className={cx("folderDataName")}>{folder.name}</h1>
    </header>
  );
}
