import { SelectedFolder } from "@/utils/api/types";

const checkFolderOperationValid = (folder: SelectedFolder): boolean => {
  const INVALID_FOLDER_NAMES = ["전체", "⭐️ 즐겨찾기"];
  return !INVALID_FOLDER_NAMES.includes(folder.name);
};

export default checkFolderOperationValid;
