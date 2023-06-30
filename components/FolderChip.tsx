"use client";

import classNames from "classnames/bind";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { SelectedFolder } from "@/utils/api/types";

import styles from "./FolderChip.module.scss";

const cx = classNames.bind(styles);

interface FolderChipProps {
  folder: SelectedFolder;
  selected: boolean;
}

export default function FolderChip({ folder, selected }: FolderChipProps) {
  const router = useRouter();
  const href = folder.id ? `/folder/${folder.id}` : "/folder";

  return (
    <Link href={href} onClick={() => router.refresh()}>
      <div className={cx("folderChip", { selected })}>{folder.name}</div>
    </Link>
  );
}
