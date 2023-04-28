import { useEffect, useState } from "react";

const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/user"
        );
        const result = await res.json();
        setUserProfile(result.data);
      } catch (error) {
        console.dir(error);
      }
    };
    fetchUser();
  }, []);

  return [userProfile, setUserProfile];
};

export default useUserProfile;
