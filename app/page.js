import GNB from "@/components/GNB";
import Footer from "@/components/Footer";
import classNames from "classnames/bind";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import getUserData from "@/api/getUserData";

const cx = classNames.bind(styles);

export default async function Home() {
  const userData = await getUserData();
  const { id: userId, name: userName, email, profileImageSource } = userData.data;

  return (
    <>
      <GNB userEmail={email} userProfileImageSorce={profileImageSource} />
      <header className={cx("header")}>
        <h1 className={cx("header-title")}>
          <span className={cx("text-gradient", "purple-to-pink")}>세상의 모든 정보</span>를
          <br />
          쉽게 저장하고 <br className={cx("tablet-mobile-br")} />
          관리해 보세요
        </h1>
        <div className={cx("add-link-button")}>
          <Link className={cx("add-link-button-content")} href="/">
            링크 추가하기
          </Link>
        </div>
        <Image className={cx("header-image")} src="/images/header_image.png" alt="헤더 이미지" width={1200} height={590} />
      </header>
      <main className={cx("main")}>
        <section className={cx("card")}>
          <div className={cx("text-container")}>
            <h1 className={cx("title")}>
              <sapn className={cx("text-gradient", "red-to-blue")}>원하는 링크</sapn>를 <br />
              저장하세요
            </h1>
            <p className={cx("description")}>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, <br />
              사고 싶은 옷, 기억하고 싶은 모든 것을 <br />한 공간에 저장하세요.
            </p>
          </div>
          <Image className={cx("intro-image")} src="/images/intro_link_card.png" alt="링크 카드 소개 이미지" width={550} height={450} />
        </section>
        <section className={cx("card")}>
          <Image className={cx("intro-image")} src="/images/intro_rename_folder.png" alt="폴더 관리 소개 이미지" width={550} height={450} />
          <div className={cx("text-container")}>
            <h1 className={cx("title")}>
              링크를 폴더로 <br />
              <sapn className={cx("text-gradient", "yellow-to-blue")}>관리</sapn>하세요
            </h1>
            <p className={cx("description")}>
              나만의 폴더를 무제한으로 만들고 <br />
              다양하게 활용할 수 있어요.
            </p>
          </div>
        </section>
        <section className={cx("card")}>
          <div className={cx("text-container")}>
            <h1 className={cx("title")}>
              저장한 링크를 <br />
              <span className={cx("text-gradient", "blue-to-sky")}>공유</span>해 보세요.
            </h1>
            <p className={cx("description")}>
              여러 링크를 폴더에 담고 공유할 수 <br className={cx("tablet-br")} />
              있어요. <br className={cx("tablet-br-none")} />
              가족, 친구, 동료들에게 쉽고 <br className={cx("tablet-br")} />
              빠르게 링크를 <br className={cx("tablet-br-none")} />
              공유해 보세요.
            </p>
          </div>
          <Image className={cx("intro-image")} src="/images/intro_share_folder.png" alt="링크 공유 소개 이미지" width={550} height={450} />
        </section>
        <section className={cx("card")}>
          <Image className={cx("intro-image")} src="/images/intro_search.png" alt="링크 검색 소개 이미지" width={550} height={450} />
          <div className={cx("text-container")}>
            <h1 className={cx("title")}>
              저장한 링크를 <br />
              <span className={cx("text-gradient", "mint-to-blue")}>검색</span>해 보세요
            </h1>
            <p className={cx("description")}>
              중요한 정보들을 검색으로 쉽게 <br className={cx("tablet-br")} />
              찾아보세요.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
