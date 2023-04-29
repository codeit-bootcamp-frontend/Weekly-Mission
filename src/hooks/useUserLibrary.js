import { useEffect, useState } from 'react';
import axios from 'axios';

const useUserLibrary = (type, url) => {
  const [userType, setUserType] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        const result = res.data;

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
    })();
  }, [type, url]);

  return [userType, setUserType];
};

export default useUserLibrary;
