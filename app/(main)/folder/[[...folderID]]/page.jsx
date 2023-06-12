"use client";

import { useEffect, useState } from "react";

import classNames from "classnames/bind";
import PropTypes from "prop-types";

import AddFolderButton from "@/components/AddFolderButton";
import AddLinkBar from "@/components/AddLinkBar";
import Card from "@/components/Card/Card";
import FolderChip from "@/components/FolderChip";
import Option from "@/components/Option";
import SearchBar from "@/components/SearchBar";
import { getFolder, getLink } from "@/utils/axiosAPI";

import styles from "./page.module.scss";

const cx = classNames.bind(styles);

export default function Folder({ params }) {
  const folderID = params.folderID ? Number(params.folderID[0]) : null;
  const userID = 1; // 추후 auth 기능 추가
  const [folders, setFolders] = useState([]);
  const [links, setLinks] = useState([]);
  const [folderName, setFolderName] = useState("");

  useEffect(() => {
    getFolder(userID).then((res) => {
      setFolders(res);
      setFolderName(
        res.find((folder) => folder.id === folderID)?.name ?? "전체",
      );
    });

    getLink(userID, folderID).then((res) => {
      setLinks(res);
    });
  }, [folderID]);

  return (
    <>
      <div className={cx("addLinkSection")}>
        <div className={cx("addLinkBarContainer")}>
          <AddLinkBar />
        </div>
      </div>
      <main>
        <section className={cx("folderSection")}>
          <div className={cx("searchBarContainer")}>
            <SearchBar />
          </div>
          <div className={cx("folderContainer")}>
            <div className={cx("folderSelect")}>
              <div className={cx("folders")}>
                <div className={cx("chipContainer")}>
                  <FolderChip id="" name="전체" />
                </div>
                {folders.map((folder) => (
                  <div key={folder.id} className={cx("chipContainer")}>
                    <FolderChip id={folder.id} name={folder.name} />
                  </div>
                ))}
              </div>
              <AddFolderButton />
            </div>
            <div className={cx("folderHeader")}>
              <h2 className={cx("title")}>{folderName}</h2>
              <Option />
            </div>
            <div className={cx("cardContainer")}>
              {links.map((link) => (
                <Card key={link.id} cardData={link} />
              ))}
            </div>
            {links.length === 0 && (
              <div className={cx("notExistLink")}>저장된 링크가 없습니다.</div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

Folder.propTypes = {
  params: PropTypes.object,
};
