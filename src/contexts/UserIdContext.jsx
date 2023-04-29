import { createContext, useContext, useState } from "react";

const UserIdContext = createContext();

export function UserIdProvider({ defaultValue = -1, children }) {
  const [userId, setUserId] = useState(defaultValue);

  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserIdContext.Provider>
  );
}

export function useUserId() {
  const context = useContext(UserIdContext);

  if (!context) {
    throw new Error("반드시 UserIdProvider 안에서 사용해야 합니다");
  }

  const { userId } = context;

  return userId;
}

export function useSetUserId() {
  const context = useContext(UserIdContext);

  if (!context) {
    throw new Error("반드시 UserIdProvider 안에서 사용해야 합니다");
  }

  const { setUserId } = context;

  return setUserId;
}
