"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { Children } from "@/types";

const userIdContext = createContext<{
  userId: number;
  setUserId: Dispatch<SetStateAction<number>>;
} | null>(null);

const UserIdProvider = ({ children }: Children) => {
  const [userId, setUserId] = useState(4);
  return (
    <userIdContext.Provider value={{ userId, setUserId }}>
      {children}
    </userIdContext.Provider>
  );
};

const useUserId = () => {
  const context = useContext(userIdContext);

  if (!context) {
    throw new Error("userId는 반드시 UserIdProvider 안에서 사용해야 합니다");
  }

  const { userId } = context;
  return userId;
};

const useSetUserId = () => {
  const context = useContext(userIdContext);

  if (!context) {
    throw new Error("setUserId는 반드시 UserIdProvider 안에서 사용해야 합니다");
  }

  const { setUserId } = context;
  return setUserId;
};

export { UserIdProvider, useUserId, useSetUserId };
