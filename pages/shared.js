import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Gnb from "@/components/Gnb";
import SearchBar from "@/components/SearchBar";
import Card from "@/components/Card";
import styles from "@/styles/Shared.module.css";

export default function Shared() {
  const [sampleUser, setSampleUser] = useState();
  const [sampleFolder, setSampleFolder] = useState();

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
      <div className={styles.linksContainer}>
        <SearchBar />
        {links.map((link) => {
          return (
            <div key={link.id}>
              <Card link={link} />
            </div>
          );
        })}
      </div>
    </>
  );
}
