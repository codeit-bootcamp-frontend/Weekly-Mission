import classNames from "classnames/bind";
import Link from "next/link";
import PropTypes from "prop-types";

import styles from "./FolderChip.module.scss";

const cx = classNames.bind(styles);

export default function FolderChip({ content }) {
  return (
    <Link href="/folder">
      <div className={cx("folderChip")}>{content}</div>
    </Link>
  );
}

FolderChip.propTypes = {
  content: PropTypes.string.isRequired,
};
