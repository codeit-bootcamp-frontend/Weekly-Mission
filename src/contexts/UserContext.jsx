import { createContext } from "react";
import useFetchData from "@/hooks/useFetchData";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { data, isLoading, error } = useFetchData(
    "https://bootcamp-api.codeit.kr" + "/api/sample/user"
  );

  return (
    <UserContext.Provider value={{ data, isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
