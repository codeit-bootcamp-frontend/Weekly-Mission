import getFolderData from "@/lib/getFolderData";
import styles from "./page.module.css";
import Image from "next/image";

const Shared = async () => {
  const userFolder = await getFolderData();

  return (
    <main className={styles.main}>
      <div className={`${styles.hero} ${styles.inner}`}>
        <div className={styles.codeitAvatar}>
          <Image
            fill
            src={userFolder.owner.profileImageSource}
            alt="Owner Avatar"
            className={styles.image}
          />
        </div>
        <span className={styles.atsign}>@{userFolder.owner.name}</span>
        <span className={styles.marks}>{userFolder.name}</span>
      </div>
    </main>
  );
};

export default Shared;
