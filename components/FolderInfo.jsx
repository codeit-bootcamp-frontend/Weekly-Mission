import classNames from "classnames/bind";
import Image from "next/image";
import PropTypes from "prop-types";

import styles from "./FolderInfo.module.scss";

const cx = classNames.bind(styles);

export default function FolderInfo({ folder, owner }) {
  return (
    <header className={cx("headerFolder")}>
      <div className={cx("ownerContainer")}>
        <div className={cx("imgContainer")}>
          <Image
            fill
            src={owner.image_source}
            alt="폴더 사용자 프로필 이미지"
          />
        </div>
        <p className={cx("ownerName")}>{`@${owner.name}`}</p>
      </div>
      <h1 className={cx("folderDataName")}>{folder.name}</h1>
    </header>
  );
}

FolderInfo.propTypes = {
  folder: PropTypes.object.isRequired,
  owner: PropTypes.object.isRequired,
};
