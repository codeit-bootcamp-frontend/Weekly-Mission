import { NextRequest, NextResponse } from "next/server";

import dbConnect from "@/utils/mongoDB/dbConnect";
import { FolderModel } from "@/utils/mongoDB/models/folder";
import { LinkModel } from "@/utils/mongoDB/models/link";
import { UserModel } from "@/utils/mongoDB/models/user";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const folderId = searchParams.get("folderId") || undefined;
  const userData = await UserModel.findById(params.id);

  let linkData;

  if (!folderId) {
    linkData = await LinkModel.find({
      user_id: params.id,
    });
  } else {
    linkData = await LinkModel.find({
      user_id: params.id,
      folder_id: folderId,
    });
  }

  return NextResponse.json(linkData);
}
