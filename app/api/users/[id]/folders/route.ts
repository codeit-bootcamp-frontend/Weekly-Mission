import { NextRequest, NextResponse } from "next/server";

import dbConnect from "@/utils/mongoDB/dbConnect";
import { FolderModel } from "@/utils/mongoDB/models/folder";
import { UserModel } from "@/utils/mongoDB/models/user";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await dbConnect();
  const userData = await UserModel.findById(params.id);
  const folderData = await FolderModel.find({
    _id: { $in: userData.folder_id },
  });
  return NextResponse.json(folderData);
}
