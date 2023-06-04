import React from "react";
import styles from "./FolderChip.module.scss";
import Link from "next/link";

interface FolderChipProps {
  href: string;
  label: string;
  selected: boolean;
}

const FolderChip = ({ href, label, selected }: FolderChipProps) => {
  return (
    <Link
      href={href}
      className={selected ? `${styles.chip} ${styles.selected}` : styles.chip}
    >
      {label}
    </Link>
  );
};

export default FolderChip;
