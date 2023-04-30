import { useEffect, useState } from "react";
import getFolderData from "./api/folderData";
import getUserData from "./api/userData";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [folderInfo, setFolderInfo] = useState([]);
  const [cards, setCards] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = async () => {
    try {
      const { folder } = await getFolderData();
      const { email, profileImageSource } = await getUserData();
      const { name, profileImageSource: ownerImageSource } = folder.owner;

      setFolderInfo([folder.name, name, ownerImageSource]);
      setCards(folder.links);
      setUserInfo([email, profileImageSource]);
      setIsLoading(true);
    } catch {
      console.log("데이터 로딩에 실패했습니다.");
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  // console.log("folderInfo", folderInfo);
  // console.log("userInfo", userInfo);
  // console.log("cards", cards);

  return (
    <>
      <custom-gnb></custom-gnb>
      <header>
        <div className="user-content">
          <img className="user-avatar" src="/images/user-avatar.svg" />
          <p className="user-nickname">@유저</p>
        </div>
        <h1 className="header-title">제목</h1>
      </header>
      <main>
        <SearchBar placeholder="원하는 링크를 검색해 보세요" />
        <div className="card-list">
          {cards.map((cardData) => (
            <Card data={cardData} />
          ))}
        </div>
      </main>
      {/* footer */}
    </>
  );
}

export default App;
