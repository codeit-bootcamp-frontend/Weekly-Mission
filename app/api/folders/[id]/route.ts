import dbConnect from "@/dbConnect";
import { FolderModel } from "@/lib/models/folder";
import { UserModel } from "@/lib/models/user";
import { LinkModel } from "@/lib/models/link";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // await dbConnect();
  // const folder = await FolderModel.findById(params.id);
  // if (!folder) {
  //   return NextResponse.json([]);
  // }
  // return NextResponse.json(folder);

  let folder;
  try {
    folder = await FolderModel.findById(params.id);
  } catch (error) {
    return NextResponse.json([]);
  }

  if (!folder) {
    return NextResponse.json([]);
  }

  return NextResponse.json(folder);
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const body = await req.json();
  const folder = await FolderModel.findByIdAndUpdate(params.id, body, {
    new: true,
  });
  return NextResponse.json(folder);
}

export async function DELETE(
  res: NextApiResponse,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  // 1. folder 지움
  await FolderModel.findByIdAndDelete(params.id);

  // 2. user: folderID 지움
  await UserModel.updateOne(
    {},
    { $pull: { folder_id: params.id } },
    { new: true }
  );
  // 3. links: folderID 지움
  await LinkModel.updateMany(
    {},
    { $pull: { folder_id: params.id } }, //스키마에 있어야함 !!!
    { new: true }
  );
  return NextResponse.json(null);
}
