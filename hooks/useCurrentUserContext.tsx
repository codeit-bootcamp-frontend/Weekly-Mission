"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { Children } from "@/types";
import { User } from "@/utils/api/types";

const currentUserContext = createContext<{
  currentUser: User;
  setCurrentUser: Dispatch<SetStateAction<User>>;
} | null>(null);

const CurrentUserProvider = ({ children }: Children) => {
  const [currentUser, setCurrentUser] = useState<User>({
    id: "649fc0074843a7796910d6f7",
    created_at: "2023-06-04T13:56:30.307749+00:00",
    name: "이안",
    image_source:
      "https://ca.slack-edge.com/T04T2BTF4F5-U0505C4KP8Q-607dc1ebd010-512",
    email: "dlxkffldk37@gmail.com",
    folder_id: [],
  });
  return (
    <currentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </currentUserContext.Provider>
  );
};

const useCurrentUser = () => {
  const context = useContext(currentUserContext);

  if (!context) {
    throw new Error(
      "currnetUser는 반드시 CurrentUserProvider 안에서 사용해야 합니다",
    );
  }

  const { currentUser } = context;
  return currentUser;
};

const useSetCurrentUser = () => {
  const context = useContext(currentUserContext);

  if (!context) {
    throw new Error(
      "setCurrnetUser는 반드시 CurrentUserProvider 안에서 사용해야 합니다",
    );
  }

  const { setCurrentUser } = context;
  return setCurrentUser;
};

export { CurrentUserProvider, useCurrentUser, useSetCurrentUser };
