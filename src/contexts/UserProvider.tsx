import { Children, User } from "$/types";
import { createContext, useState, useContext, ReactNode } from "react";

interface UserContextValue {
  user: User | null;
  setUser: (user: User | null) => void;
}
const UserContext = createContext<UserContextValue | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
  initialUser: User | null;
}

const UserProvider = ({ children, initialUser }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(initialUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };

export const useUser = () => useContext(UserContext);
