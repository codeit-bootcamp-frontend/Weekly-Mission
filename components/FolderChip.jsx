"use client";

import classNames from "classnames/bind";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";

import styles from "./FolderChip.module.scss";

const cx = classNames.bind(styles);

export default function FolderChip({ id, name }) {
  const pathname = usePathname();
  const href = id ? `/folder/${id}` : "/folder";
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div className={cx("folderChip", isActive && "active")}>{name}</div>
    </Link>
  );
}

FolderChip.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
};
