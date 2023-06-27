import classNames from "classnames/bind";
import styles from "@/styles/FolderChip.module.css";
import Link from "next/link";

interface Props {
  children: string;
  id?: number | string;
  active?: boolean;
}

const cx = classNames.bind(styles);

export default function FolderChip({ children, id = "", active = false }: Props) {
  return (
    <Link href={`/folder/${id}`}>
      <button className={cx("chip-button", { active })} type="button">
        {children}
      </button>
    </Link>
  );
}
