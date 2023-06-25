import { atom } from "recoil";
import { Folder } from "../types/types";

export const folderListState = atom<Folder[]>({
  key: "FolderListState",
  default: [],
});
