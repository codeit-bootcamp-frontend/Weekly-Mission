import Card from "./Card/Card";

const CardList = ({ folderData, isLoad }) => {
  return (
    <div className="cardList">
      {isLoad ? (
        folderData.links.map((item) => {
          return <Card key={item.id} data={item} />;
        })
      ) : (
        <div>로딩중</div>
      )}
    </div>
  );
};

export default CardList;
