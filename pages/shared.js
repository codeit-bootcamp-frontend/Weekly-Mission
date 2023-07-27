import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Image from "next/image";
import Gnb from "@/components/Gnb";
import SearchBar from "@/components/SearchBar";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import styles from "@/styles/Shared.module.css";

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

  return (
    <>
      <Gnb user={sampleUser} />
      <div className={styles.ownerBoard}>
        <div className={styles.ownerImage}>
          <Image
            className={styles.image}
            fill
            src={owner.profileImageSource}
            alt={owner.name}
          />
        </div>
        <div className={styles.ownerName}>@{owner.name}</div>
        <div className={styles.folderName}>{name}</div>
      </div>
      <div className={styles.folder}>
        <SearchBar />
        <div className={styles.linksWrapper}>
          {links.map((link) => {
            return (
              <div key={link.id}>
                <Card link={link} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
