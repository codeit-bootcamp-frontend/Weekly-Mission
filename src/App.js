import { useEffect, useState } from "react";
import getFolderData from "./api/folderData";
import getUserData from "./api/userData";
import GNB from "./components/GNB";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./common/color.css";
import "./common/reset.css";
import "./App.css";

function App() {
  const [folderInfo, setFolderInfo] = useState(null);
  const [cards, setCards] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const handleLoad = async () => {
    let folderResult;
    let userResult;
    try {
      folderResult = await getFolderData();
      userResult = await getUserData();
    } catch (error) {
      setLoadingError(error);
      return;
    }
    const { folder } = folderResult;
    const { email, profileImageSource } = userResult;
    const { name, profileImageSource: ownerImageSource } = folder.owner;
    setFolderInfo({ folderName: folder.name, ownerName: name, ownerImageSource });
    setCards(folder.links);
    setUserInfo({ email, profileImageSource });
    setIsLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      {isLoaded ? (
        <>
          <GNB userInfo={userInfo} />
          <header>
            <div className="user-content">
              <img className="user-avatar" src={folderInfo.ownerImageSource} alt="avatar" />
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
      ) : loadingError ? (
        <h1>API 리퀘스트에 실패했습니다. 잠시 후에 시도하세요</h1>
      ) : (
        <h1>로딩 중...</h1>
      )}
    </>
  );
}

export default App;
