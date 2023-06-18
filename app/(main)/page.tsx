import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.scss";

import homehero from "@/public/images/capture-linkbrary.png";
import manageFeatureImage from "@/public/images/capture-manage.png";
import saveFeatureImage from "@/public/images/capture-save.png";
import searchFeatureImage from "@/public/images/capture-search.png";
import shareFeatureImage from "@/public/images/capture-share.png";

const cx = classNames.bind(styles);

export const metadata = {
  title: "Linkbrary",
  openGraph: {
    title: "Linkbrary",
    description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
    url: "https://www.codeit.kr/dashboard", // 배포 사이트에 맞게 변경 필요
    type: "website",
    images: [
      {
        url: "/sns-preview.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linkbrary",
    description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
    images: ["/sns-preview.png"],
  },
};

export default function Home() {
  return (
    <main className={cx("home")}>
      <section className={cx("section-top")}>
        <h1 className={cx("explain-linkbrary")}>
          <span className={cx("gradation", "grad-1")}>세상의 모든 정보</span>를
          <br />
          쉽게 저장하고 <br className={cx("br-not-pc")} />
          관리해 보세요
        </h1>
        <Link href="/shared" className={cx("btn-add-link")}>
          링크 추가하기
        </Link>
        <Image
          className={cx("img-homehero")}
          src={homehero}
          alt="홈히어로이미지"
          priority={true}
        />
      </section>

      <section className={cx("section-feature")}>
        <h2 className={cx("feature-title")}>
          <span className={cx("gradation", "grad-2")}>원하는 링크</span>를
          저장하세요
        </h2>
        <p className={cx("feature-detail")}>
          나중에 읽고 싶은 글, 다시 보고 싶은 영상,
          <br className={cx("br-not-mobile")} />
          사고 싶은 옷, 기억하고 싶은 모든 것을
          <br className={cx("br-not-mobile")} />한 공간에 저장하세요.
        </p>
        <Image
          className={cx("img-feature")}
          src={saveFeatureImage}
          alt="저장feature이미지"
        />
      </section>

      <section className={cx("section-feature")}>
        <Image
          className={cx("img-feature")}
          src={manageFeatureImage}
          alt="관리feature이미지"
        />
        <h2 className={cx("feature-title")}>
          링크를 폴더로 <span className={cx("gradation", "grad-3")}>관리</span>
          하세요
        </h2>
        <p className={cx("feature-detail")}>
          나만의 폴더를 무제한으로 만들고
          <br className={cx("br-not-mobile")} />
          다양하게 활용할 수 있어요.
        </p>
      </section>

      <section className={cx("section-feature")}>
        <h2 className={cx("feature-title")}>
          저장한 링크를 <span className={cx("gradation", "grad-4")}>공유</span>
          해 보세요
        </h2>
        <p className={cx("feature-detail")}>
          여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
          쉽고 빠르게 링크를 공유해 보세요.
        </p>
        <Image
          className={cx("img-feature")}
          src={shareFeatureImage}
          alt="공유feature이미지"
        />
      </section>

      <section className={cx("section-feature")}>
        <Image
          className={cx("img-feature")}
          src={searchFeatureImage}
          alt="검색feature이미지"
        />
        <h2 className={cx("feature-title")}>
          저장한 링크를 <span className={cx("gradation", "grad-5")}>검색</span>
          해 보세요
        </h2>
        <p className={cx("feature-detail")}>
          중요한 정보들을 검색으로 쉽게 찾아보세요.
        </p>
      </section>
    </main>
  );
}
