import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Image from "next/image";
import Gnb from "@/components/Gnb";
import SearchBar from "@/components/SearchBar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import styles from "@/styles/Shared.module.css";
import classNames from "classnames/bind";

const TODAY = new Date();

const INITIAL_FOLDER = {
  folder: {
    name: "",
    owner: { profileImageSource: "", name: "" },
    links: [],
  },
};

export default function Shared() {
  const [sampleUser, setSampleUser] = useState();
  const [sampleFolder, setSampleFolder] = useState(INITIAL_FOLDER);

  async function getSampleUser() {
    const res = await axios.get(`/sample/user`);
    const nextSampleUser = res.data;
    setSampleUser(nextSampleUser);
  }

  async function getSampleFolder() {
    const res = await axios.get(`/sample/folder`);
    const nextSampleFolder = res.data;
    setSampleFolder(nextSampleFolder);
  }

  useEffect(() => {
    getSampleUser();
    getSampleFolder();
  }, []);

  const { folder } = sampleFolder;
  const { name, owner, links } = folder;

  const cx = classNames.bind(styles);

  return (
    <>
      <Gnb user={sampleUser} />
      <div className={cx("owner-board")}>
        <div className={cx("owner-image")}>
          <Image
            className={cx("image")}
            fill
            src={owner.profileImageSource}
            alt={owner.name}
          />
        </div>
        <div className={cx("owner-name")}>@{owner.name}</div>
        <div className={cx("folder-name")}>{name}</div>
      </div>
      <div className={cx("folder")}>
        <SearchBar />
        <div className={cx("links-wrapper")}>
          {links.map((link) => {
            return (
              <div key={link.id}>
                <Card link={link} today={TODAY} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
