import { useState, useEffect } from "react";
import { getUsers } from "utils/api";
import DefaultProfileSource from "assets/default-profile.jpg";

function useUserData() {
  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserImage] = useState(DefaultProfileSource);

  const getUserData = async () => {
    const { data } = await getUsers();
    if (!data) return;
    const { email, profileImageSource } = data;
    setUserEmail(email || "");
    setUserImage(profileImageSource || DefaultProfileSource);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return { userEmail, userImage };
}

export default useUserData;
