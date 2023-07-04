import { Folder } from "$/types";
import { createContext } from "react";

type FolderTabsContextType = {
  tabs: Folder[];
  setTabs: React.Dispatch<React.SetStateAction<Folder[]>>;
};

const FolderTabsContext = createContext<FolderTabsContextType>({
  tabs: [],
  setTabs: () => {},
});

export default FolderTabsContext;
