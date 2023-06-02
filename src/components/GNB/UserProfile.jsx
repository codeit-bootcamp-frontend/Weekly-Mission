import React, { useCallback, useEffect, useState } from "react";
import useAsync from "../../hooks/useAsync";
import { getUserData } from "../../api";
import styles from "./UserProfile.module.css";

function UserProfile() {
  const [user, setUser] = useState(null);
  const { loading, error, callAsyncFunction } = useAsync(getUserData);

  const applyUserData = useCallback(async () => {
    const userData = await callAsyncFunction();
    if (!userData) return;
    setUser(userData);
  }, [callAsyncFunction]);

  useEffect(() => {
    applyUserData();
  }, [applyUserData]);

  if (error) return <div>{error.message}</div>;
  if (!user) return null;
  return (
    <div className={styles.userContainer}>
      <img
        className={styles.userImg}
        src={user.profileImageSource}
        alt={user.name}
      />
      <p className={styles.userEmail}>{user.email}</p>
    </div>
  );
}

export default UserProfile;
