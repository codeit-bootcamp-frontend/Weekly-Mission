import Link from "next/link";
import Image from "next/image";
import styles from "@/components/Gnb.module.css";

function SigninButton() {
  return (
    <>
      <Link className={styles.link} href="/signin">
        <div className={`${styles.button} ${styles.signin}`}>로그인</div>
      </Link>
    </>
  );
}

function UserProfile({ user }) {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.userImage}>
        <Image
          className={styles.image}
          fill
          src={user.profileImageSource}
          alt={user.name}
        />
      </div>
      <div className={styles.userEmail}>{user.email}</div>
    </div>
  );
}

export default function Gnb({ user }) {
  return (
    <div className={styles.gnbContainer}>
      <div className={styles.gnb}>
        <Link href="/">
          <img className={styles.logo} src="/images/logo.png" alt="Linkbrary" />
        </Link>
        {user ? <UserProfile user={user} /> : <SigninButton />}
      </div>
    </div>
  );
}
