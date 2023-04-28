import { useEffect, useState } from "react";

const useUserFolder = () => {
  const [userFolder, setUserFolder] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_FOLDER_URL);
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
