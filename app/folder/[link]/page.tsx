import styles from "@folder/[link]/page.module.css";
import UpdateLink from "@components/UpdateLink";
import { PropsType } from "@library/propsType";

const page = async (props: PropsType) => {
  let title = "";
  switch (props.params.link) {
    case undefined:
      title = "전체";
      break;
    case "1":
      title = "⭐️ 즐겨찾기";
      break;
    case "2":
      title = "코딩 팁";
      break;
    case "3":
      title = "채용 사이트";
      break;
    case "4":
      title = "유용한 글";
      break;
    case "5":
      title = "나만의 장소";
      break;
  }

  console.log(props);

  return (
    <>
      <UpdateLink title={title} />
      <div className={styles.content}>저장된 링크가 없습니다.</div>
    </>
  );
};

export default page;
