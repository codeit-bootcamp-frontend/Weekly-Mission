import styles from "@/components/IntroduceCards.module.css";
import classNames from "classnames/bind";

export default function IntroduceCards() {
  const cx = classNames.bind(styles);

  return (
    <>
      <div className={cx("card")}>
        <div className={cx("title")}>
          <span className={cx("gradient1")}>원하는 링크</span>를 저장하세요
        </div>
        <div className={cx("description")}>
          나중에 읽고 싶은 글, 다시 보고 싶은 영상,
          <br className={cx("line-break")} />
          사고 싶은 옷, 기억하고 싶은 모든 것을
          <br className={cx("line-break")} />한 공간에 저장하세요.
        </div>
        <img
          className={cx("card-image", "right-image")}
          src="/images/image2.png"
        />
      </div>
      <div className={cx("card")}>
        <img
          className={cx("card-image", "left-image")}
          src="/images/image3.png"
        />
        <div className={cx("title")}>
          링크를 폴더로 <span className={cx("gradient2")}>관리</span>하세요
        </div>
        <div className={cx("description")}>
          나만의 폴더를 무제한으로 만들고
          <br className={cx("line-break")} />
          다양하게 활용할 수 있습니다.
        </div>
      </div>
      <div className={cx("card")}>
        <div className={cx("title")}>
          저장한 링크를
          <span className={cx("gradient3")}>공유</span>해 보세요
        </div>
        <div className={cx("description")}>
          여러 링크를 폴더에 담고 공유할 수 <br className={cx("line-tablet")} />
          있습니다.
          <br className={cx("line-desktop")} />
          가족, 친구, 동료들에게 쉽고 <br className={cx("line-tablet")} />
          빠르게 링크를
          <br className={cx("line-desktop")} />
          공유해 보세요.
        </div>
        <img
          className={cx("card-image", "right-image")}
          src="/images/image4.png"
        />
      </div>
      <div className={cx("card")}>
        <img
          className={cx("card-image", "left-image")}
          src="/images/image5.png"
        />
        <div className={cx("title")}>
          저장한 링크를
          <span className={cx("gradient4")}>검색</span>해 보세요
        </div>
        <div className={cx("description")}>
          중요한 정보들을 검색으로 쉽게 <br className={cx("line-tablet")} />
          찾아보세요.
        </div>
      </div>
    </>
  );
}
