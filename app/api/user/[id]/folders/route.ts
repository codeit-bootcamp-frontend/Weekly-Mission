import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConnect";
import { UserModel } from "@/lib/models/user";
import { FolderModel } from "@/lib/models/folder";

export async function GET(
  req: NextRequest,
  { params }: { params: { id : string } }
) {
  await dbConnect();
  const userData = await UserModel.findById(params.id);
  const folderData = await FolderModel.find({ _id: { $in: userData.folders } });
  return NextResponse.json(folderData);
}
