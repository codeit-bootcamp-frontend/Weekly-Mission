import { useEffect, useState } from "react";
import getFolderData from "./api/folderData";
import getUserData from "./api/userData";
import GNB from "./components/GNB";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [folderInfo, setFolderInfo] = useState(null);
  const [cards, setCards] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = async () => {
    try {
      const { folder } = await getFolderData();
      const { email, profileImageSource } = await getUserData();
      const { name, profileImageSource: ownerImageSource } = folder.owner;

      setFolderInfo({ folderName: folder.name, ownerName: name, ownerImageSource });
      setCards(folder.links);
      setUserInfo({ email, profileImageSource });
      setIsLoading(true);
    } catch {
      console.log("데이터 로딩에 실패했습니다.");
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <GNB userInfo={userInfo} />
          <header>
            <div className="user-content">
              <img className="user-avatar" src={folderInfo.ownerImageSource} />
              <p className="user-nickname">@{folderInfo.ownerName}</p>
            </div>
            <h1 className="header-title">{folderInfo.folderName}</h1>
          </header>
          <main>
            <SearchBar placeholder="원하는 링크를 검색해 보세요" />
            <div className="card-list">
              {cards?.map((cardData) => (
                <Card key={cardData.id} data={cardData} />
              ))}
            </div>
          </main>
          <Footer />
        </>
      ) : (
        <h1>로딩 중...</h1>
      )}
    </>
  );
}

export default App;
