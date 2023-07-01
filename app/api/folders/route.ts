import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConnect";
import { FolderModel } from "@/lib/models/folder";
import { UserModel } from "@/lib/models/user";

export async function GET(req: NextRequest) {
  await dbConnect();
  const folders = await FolderModel.find();
  return NextResponse.json(folders);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();
  const { userId, ...rest } = body;
  const newObj = { ...rest, user_id: userId };

  const folder = await FolderModel.create(newObj);

  await UserModel.findByIdAndUpdate(
    body.userId,
    { $push: { folder_id: folder.id } }
    // { new: true }
  );
  return NextResponse.json(folder);
}
