import Gnb from "@/components/Gnb";
import Footer from "@/components/Footer";
import "@/pages/shared/SharedPage.css";
import SearchBox from "@components/SearchBox";
import { useEffect, useState } from "react";
import getFolderData from "@/apis/folder";
import getUserData from "@/apis/user";
import Avatar from "@assets/img/Avatar.png";
import CardContainer from "@components/CardContainer";

const SharedPage = () => {
  // Gnb 데이터
  const [gnbData, setGnbData] = useState();
  const GnbLoad = async () => {
    const res = await getUserData();

    const { data } = res;
    console.log(data);
    setGnbData(data);
  };

  //헤더 데이터
  const [profileImg, setProfileImg] = useState(Avatar);
  const [name, setName] = useState("user");
  const [folderName, setFolderName] = useState("폴더이름");

  const HeaderLoad = async () => {
    const res = await getFolderData();
    const { data } = res;
    const { folder } = data;
    const { owner } = folder;
    const { name, profileImageSource } = owner;
    setProfileImg(profileImageSource);
    setName(name);
    setFolderName(folder["name"]);
  };

  // 카드 데이터
  const [cardData, setCardData] = useState();
  const CardLoad = async () => {
    const res = await getFolderData();
    const { data } = res;
    const { folder } = data;
    const { links } = folder;
    setCardData(links);
  };

  useEffect(() => {
    GnbLoad();
    CardLoad();
    HeaderLoad();
  }, []);

  return (
    <>
      <Gnb gnbData={gnbData} />
      <header>
        <div className="headerBox">
          <img className="headerImg" src={profileImg} />
          <p className="user">{name}</p>
          <h1 className="headerTitle">{folderName}</h1>
        </div>
      </header>
      <main>
        <SearchBox />
        <CardContainer cardData={cardData} />
      </main>
      <Footer />
    </>
  );
};

export default SharedPage;
