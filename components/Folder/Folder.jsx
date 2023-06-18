import styles from "./Folder.module.css";
import classNames from "classnames/bind";
import Link from "next/link";

const cx = classNames.bind(styles);

export default async function Folder({ href, name, selected }) {
  return (
    <Link href={href} className={cx("folder", { selected })}>
      {name}
    </Link>
  );
}
