import { useEffect, useState } from "react";

const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_USER_URL);
        const result = await res.json();
        setUserProfile(result.data);
      } catch (e) {
        console.dir(e);
      }
    };
    fetchUser();
  }, []);

  return [userProfile, setUserProfile];
};

export default useUserProfile;
