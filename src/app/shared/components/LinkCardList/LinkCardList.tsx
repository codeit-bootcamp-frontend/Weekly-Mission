import LinkCard, { LinkCardProp } from "./LinkCard/LinkCard";
import styles from "./LinkCardList.module.scss";

interface LinkCardListProp {
  cardDataList: LinkCardProp[];
}

const LinkCardList = ({ cardDataList }: LinkCardListProp) => {
  return (
    <>
      <ul className={styles.cardListContainer}>
        {cardDataList &&
          cardDataList.map((cardData) => {
            return (
              <li className={styles.cardItemContainer} key={cardData.id}>
                <LinkCard {...cardData} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default LinkCardList;
