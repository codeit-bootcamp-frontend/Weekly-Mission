import { redirect } from "next/navigation";

import FolderContent from "@/components/FolderContent";
import { useCurrentUser } from "@/hooks/useCurrentUserContext";
import { getFolder, getFolders, getLinks } from "@/utils/api";
import { SelectedFolder } from "@/utils/api/types";
import convertParamToNum from "@/utils/convertParamToNum";

export default async function Folder({ params }: { params: { id: string[] } }) {
  // const { id: userId } = useCurrentUser();
  const userId = 4; // TODO: 서버 컴포넌트에서 userId 어떻게 얻어??
  const folderId = convertParamToNum(params.id);

  if (folderId === null) redirect("/folder");

  const [folder, folders, links] = await Promise.all([
    getFolder(userId, folderId),
    getFolders(userId),
    getLinks(userId),
  ]);

  let currentFolder: SelectedFolder;
  if (folderId === 0) {
    currentFolder = { id: 0, name: "전체" };
  } else {
    if (!folder) return redirect("/folder");
    currentFolder = { id: folder.id, name: folder.name };
  }

  const filteredLinks =
    folderId === 0
      ? links
      : links.filter((link) => link.folder_id === folderId);

  return (
    <FolderContent
      userId={userId}
      initialFolders={folders}
      initialCurrentFolder={currentFolder}
      initialLinks={filteredLinks}
    />
  );
}
