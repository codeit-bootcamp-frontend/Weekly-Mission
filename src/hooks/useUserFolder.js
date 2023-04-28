import { useEffect, useState } from "react";

const useUserFolder = () => {
  const [userFolder, setUserFolder] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        const result = await res.json();
        setUserFolder(result.data.folder);
      } catch (error) {
        console.dir(error);
      }
    };
    fetchUser();
  }, []);

  return [userFolder, setUserFolder];
};

export default useUserFolder;
