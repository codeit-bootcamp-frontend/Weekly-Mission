import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConnect";
import { FolderModel } from "@/lib/models/folder";
import { UserModel } from "@/lib/models/user";
import { LinkModel } from "@/lib/models/link";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const folder = await FolderModel.findById(params.id);
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
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  // 1. folder 지움
  const folder = await FolderModel.findByIdAndDelete(params.id);

  // 2. user: folderID 지움
  await UserModel.findOneAndUpdate(
    { _id: "64992eec930d7d6257c06f19" },
    { $pull: { folders: params.id } },
    { new: true } //업데이트 이후의 반환값 지정
  );

  // 3. links: folderID 지움
  // let links;

  // const folderData = await FolderModel.findOne({ _id: params.id });
  // if (folderData) {
  //   links = folderData.links;
  // } //null?

  await LinkModel.findOneAndUpdate(
    { folders: params.id },
    { $pull: { folders: params.id } },
    { new: true } //업데이트 이후의 반환값 지정
  );

  //findOneandUpdate

  return NextResponse.json(folder);
}

/*
putFolder('/folders/{id}', {
"name": "string"
})

=> folders 컬렉션에서 해당 folder의 name을 바꾼다.
*/
