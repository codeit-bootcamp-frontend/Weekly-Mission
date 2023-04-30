import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import SharedHeader from "components/SharedHeader";
import SharedMain from "components/SharedMain";
import { getFolders } from "utils/api";

function SharedPage() {
  const defaultOwnerImage = "src/assets/default-profile.png";
  const [ownerImage, setOwnerImage] = useState(defaultOwnerImage);
  const [ownerName, setOwnerName] = useState("");
  const [folderName, setFolderName] = useState("");

  const getFolderData = async () => {
    const { data } = await getFolders();
    if (!data) return;
    const { name, owner } = data.folder;
    setOwnerImage(owner.profileImageSource);
    setOwnerName(owner.name);
    setFolderName(name);
  };

  const getLinks = async () => {
    const { data } = await getFolders();
    if (!data) return;
    const { links } = data.folder;
  };

  useEffect(() => {
    getFolderData();
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
      <SharedMain />
    </>
  );
}

export default SharedPage;
