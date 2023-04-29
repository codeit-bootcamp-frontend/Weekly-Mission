import { useEffect, useState } from 'react';

const useUserLibrary = (type, url) => {
  const [userType, setUserType] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(url);
        const result = await res.json();

        switch (true) {
          case type === 'folder':
            setUserType(result.data.folder);
            break;
          case type === 'profile':
            setUserType(result.data);
            break;
        }
      } catch (error) {
        console.dir(error);
      }
    };
    fetchUser();
  }, [type, url]);

  return [userType, setUserType];
};

export default useUserLibrary;
