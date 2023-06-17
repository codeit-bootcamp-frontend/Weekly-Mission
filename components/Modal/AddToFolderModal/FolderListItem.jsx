"use client";

import classNames from "classnames/bind";
import Image from "next/image";
import PropTypes from "prop-types";

import styles from "./FolderListItem.module.scss";

import checkIcon from "@/public/images/check.svg";

const cx = classNames.bind(styles);

export default function FolderListItem({ folder, selected, onClick }) {
  // 현재 API 방식에서는 각 folder의 링크 갯수를 알려면 각 folder에 대하여 link API를 요청해야 하는데,
  // 적절치 못한 것 같아 링크 갯수를 임시로 folder.id로 처리함
  return (
    <div
      className={cx("container", { selected })}
      onClick={() => onClick(folder.id)}
    >
      <div className={cx("textContainer")}>
        <p className={cx("name", { selected })}>{folder.name}</p>
        <p className={cx("linksNum")}>{folder.id}개 링크</p>
      </div>
      {selected && (
        <Image width={14} height={14} src={checkIcon} alt="체크 아이콘" />
      )}
    </div>
  );
}

FolderListItem.propTypes = {
  folder: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
