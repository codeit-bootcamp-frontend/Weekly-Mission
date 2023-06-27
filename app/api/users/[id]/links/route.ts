import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConnect";
import { UserModel } from "@/lib/models/user";
import { LinkModel } from "@/lib/models/link";
import { FolderModel } from "@/lib/models/folder";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const folderId = searchParams.get("folderId") || undefined;

  const userData = await UserModel.findById(params.id);
  const folderData = await FolderModel.find({ _id: { $in: userData.folders } });
  const linkIds = folderData.reduce((ids, folder) => {
    return ids.concat(folder.links);
  }, []);

  let linkData = (await LinkModel.find({ _id: { $in: linkIds } })) as any[];
  //해당 유저가 가지고 있는 모든 links
  if (folderId) {
    linkData = linkData.filter((link) => link.folders.includes(folderId));
  }
  //쿼리스트링이 있는 경우

  return NextResponse.json(linkData);
}
