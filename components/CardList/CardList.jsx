import styles from "./CardList.module.css";
import classNames from "classnames/bind";
import Card from "@/components/Card/Card";

const cx = classNames.bind(styles);

export default async function CardList({ cardList, currentFolderName }) {
  return (
    <>
      <h2 className={cx("card-title")}>{currentFolderName}</h2>
      <ul className={cx("card-list")}>
        {!cardList.length ? (
          <li className={cx("empty-data-message")}>저장된 링크가 없습니다</li>
        ) : (
          cardList.map((card) => (
            <li key={card.id} className={cx("card")}>
              <Card card={card} />
            </li>
          ))
        )}
      </ul>
    </>
  );
}
