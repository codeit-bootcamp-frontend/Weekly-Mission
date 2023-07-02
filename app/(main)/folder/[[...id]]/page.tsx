import { redirect } from "next/navigation";

import FolderContent from "@/components/FolderContent";
import { getFolders, getLinks } from "@/utils/api";
import { SelectedFolder } from "@/utils/api/types";

export default async function Folder({ params }: { params: { id: string[] } }) {
  // const { id: userId } = useCurrentUser();
  const userId = "649fc0074843a7796910d6f7"; // TODO: 서버 컴포넌트에서 userId 어떻게 얻어??
  const folderId = Array.isArray(params.id) ? params.id[0] : params.id;

  const [folders, links] = await Promise.all([
    getFolders(userId),
    getLinks(userId),
  ]);

  let currentFolder: SelectedFolder;
  if (!folderId) {
    currentFolder = { id: "", name: "전체" };
  } else {
    const foundFolder = folders.find((folder) => folder.id === folderId);
    if (!foundFolder) return redirect("/folder");
    currentFolder = { id: foundFolder.id, name: foundFolder.name };
  }

  const filteredLinks = !folderId
    ? links
    : links.filter((link) => link.folder_id.includes(folderId));
  return (
    <FolderContent
      userId={userId}
      initialFolders={folders}
      initialCurrentFolder={currentFolder}
      initialLinks={filteredLinks}
    />
  );
}
