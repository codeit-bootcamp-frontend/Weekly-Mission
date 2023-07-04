import { createContext } from "react";

type CurrentTabContextType = {
  currentFolderTitle: string;
  setCurrentFolderTitle: React.Dispatch<React.SetStateAction<string>>;
};

const CurrentTabContext = createContext<CurrentTabContextType>({
  currentFolderTitle: "전체",
  setCurrentFolderTitle: () => {},
});

export default CurrentTabContext;
