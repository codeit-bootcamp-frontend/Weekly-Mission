import { createContext } from "react";
import { Folder } from "$/types";
const FolderTabsContext = createContext<Folder[] | undefined>(undefined);

export default FolderTabsContext;
