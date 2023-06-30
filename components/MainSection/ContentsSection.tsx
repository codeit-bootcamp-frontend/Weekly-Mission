import styles from "../../app/page.module.scss";
import SectionInfoWrapper from "./InfoSection";

const ContentsSection = () => {
  return (
    <div className={styles.contents}>
      <div className={styles.inner}>
        <SectionInfoWrapper
          sectionClassName={`${styles.save} ${styles.section}`}
          paragraph="나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
            싶은 모든 것을 한 공간에 저장하세요."
          imgName="save-link"
        >
          <span>
            <span className={styles.gradient}>원하는 링크</span>를
          </span>
          <span>저장하세요</span>
        </SectionInfoWrapper>

        <SectionInfoWrapper
          sectionClassName={`${styles.section} ${styles.manage} ${styles.right}`}
          paragraph="나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다."
          imgName="manage-link"
        >
          <span>링크를 폴더로</span>
          <span>
            <span className={styles.gradient}>관리</span>하세요
          </span>
        </SectionInfoWrapper>

        <SectionInfoWrapper
          sectionClassName={`${styles.share} ${styles.section}`}
          paragraph="여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구,
              동료들에게 쉽고 빠르게 링크를 공유해 보세요."
          imgName="share-link"
        >
          <span>저장한 링크를</span>
          <span>
            <span className={styles.gradient}>공유</span>해 보세요
          </span>
        </SectionInfoWrapper>

        <SectionInfoWrapper
          sectionClassName={`${styles.section} ${styles.search} ${styles.right}`}
          paragraph="중요한 정보들을 검색으로 쉽게 찾아보세요."
          imgName="search-link"
        >
          <span>저장한 링크를</span>
          <span>
            <span className={styles.gradient}>검색</span>해 보세요
          </span>
        </SectionInfoWrapper>
      </div>
    </div>
  );
};

export default ContentsSection;
