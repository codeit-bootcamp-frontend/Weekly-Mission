import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import SharedHeader from "components/SharedHeader";
import SharedMain from "components/SharedMain";
import { getFolders } from "utils/api";

function SharedPage() {
  const defaultOwnerImage = "default-avatar.png";
  const [ownerImage, setOwnerImage] = useState(defaultOwnerImage);
  const [ownerName, setOwnerName] = useState("");
  const [folderName, setFolderName] = useState("");
  const [cardLinks, setCardLinks] = useState([]);

  const getFolderData = async () => {
    try {
      const { data } = await getFolders();
      if (!data) return;
      const { name, owner } = data.folder;
      setOwnerImage(owner.profileImageSource);
      setOwnerName(owner.name);
      setFolderName(name);
    } catch (error) {
      console.error(error);
    }
  };

  const getLinks = async () => {
    try {
      const { data } = await getFolders();
      if (!data) return;
      const { links } = data.folder;
      setCardLinks(links);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFolderData();
  }, []);

  // 나중에 Links는 업데이트가 따로 필요할 수 있으므로 getFolderData와 다른 곳에 작성했습니다.
  useEffect(() => {
    getLinks();
  }, []);

  return (
    <>
      <Helmet>
        <title>즐겨찾기 | Linkbrary</title>
      </Helmet>
      <SharedHeader
        OwnerName={ownerName}
        OwnerImage={ownerImage}
        FolderName={folderName}
      />
      <SharedMain CardLinks={cardLinks} />
    </>
  );
}

export default SharedPage;
