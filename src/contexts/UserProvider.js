import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children, initialUser }) => {
  const [user, setUser] = useState(initialUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };

export const useUser = () => useContext(UserContext);
