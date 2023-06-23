import { Folder } from "@/utils/api/types";

import { getLinks } from "./api";

const countLinksNum = async (folders: Folder[], userId: number) => {
  const folderIds = folders.map((folder) => folder.id);
  const responses = await Promise.all(
    folderIds.map((folderId) => getLinks(userId, folderId)),
  );
  return responses.map((links) => links.length);
};

export default countLinksNum;
