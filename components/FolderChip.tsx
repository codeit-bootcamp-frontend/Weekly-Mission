"use client";

import classNames from "classnames/bind";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SelectedFolder } from "@/utils/api/types";

import styles from "./FolderChip.module.scss";

const cx = classNames.bind(styles);

export default function FolderChip({ folder }: { folder: SelectedFolder }) {
  const pathname = usePathname();
  const href = folder.id ? `/folder/${folder.id}` : "/folder";
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div className={cx("folderChip", { isActive })}>{folder.name}</div>
    </Link>
  );
}
