import styles from "./page.module.css";
import Image from "next/image";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default async function Home() {
  return (
    <main>
      <section className={cx("banner")}>
        <div className={cx("container")}>
          <h2 className={cx("title")}>
            <span className={cx("highlight")}>세상의 모든 정보</span>를<br />
            <span className={cx("line-break")}>쉽게 저장하고 </span>
            관리해보세요
          </h2>
          <a className={cx("link-btn")} href="#">
            링크 추가하기
          </a>
          <Image
            src="/assets/full.png"
            alt="Main Image"
            width={1118}
            height={540}
            className={cx("main-img", "image")}
          />
        </div>
      </section>
      <section className={cx("content")}>
        <div className={cx("container")}>
          <article className={cx("card")}>
            <h3 className={cx("title")}>
              <span className={cx("line-break")}>
                <span className={cx("highlight")}>원하는 링크</span>를{" "}
              </span>
              저장하세요
            </h3>
            <p className={cx("desc")}>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
              싶은 모든 것을 한 공간에 저장하세요.
            </p>
            <Image
              src="/assets/img1.png"
              alt="Save Link"
              width={550}
              height={450}
              className={cx("image")}
            />
          </article>
          <article className={cx("card")}>
            <h3 className={cx("title")}>
              <span className={cx("line-break")}>링크를 폴더로 </span>
              <span className={cx("highlight")}>관리</span>하세요
            </h3>
            <p className={cx("desc")}>
              <span className={cx("line-break")}>
                나만의 폴더를 무제한으로 만들고{" "}
              </span>
              다양하게 활용할 수 있습니다.
            </p>
            <Image
              src="/assets/img2.png"
              alt="Manage Link"
              width={550}
              height={450}
              className={cx("image")}
            />
          </article>
          <article className={cx("card")}>
            <h3 className={cx("title")}>
              <span className={cx("line-break")}>저장한 링크를 </span>
              <span className={cx("highlight")}>공유</span>해 보세요
            </h3>
            <p className={cx("desc")}>
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
              쉽고 빠르게 링크를 공유해 보세요.
            </p>
            <Image
              src="/assets/img3.png"
              alt="Share Link"
              width={550}
              height={450}
              className={cx("image")}
            />
          </article>
          <article className={cx("card")}>
            <h3 className={cx("title")}>
              <span className={cx("line-break")}>저장한 링크를 </span>
              <span className={cx("highlight")}>검색</span>해 보세요
            </h3>
            <p className={cx("desc")}>
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </p>
            <Image
              src="/assets/img4.png"
              alt="Search Link"
              width={550}
              height={450}
              className={cx("image")}
            />
          </article>
        </div>
      </section>
    </main>
  );
}
