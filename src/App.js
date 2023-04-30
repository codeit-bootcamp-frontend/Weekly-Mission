import { useEffect, useState } from "react";
import getFolderData from "./api/folderData";
import getUserData from "./api/userData";
import Card from "./components/Card";

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

  console.log("folderInfo", folderInfo);
  console.log("userInfo", userInfo);
  console.log("cards", cards);

  return <div className="App">{isLoading ? <Card data={cards[1]} /> : <div>Hello</div>}</div>;
}

export default App;
