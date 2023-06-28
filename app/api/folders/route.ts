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
  const folder = await FolderModel.create(body);

  const user = await UserModel.findByIdAndUpdate(
    body.userId,
    { $push: { folders: folder._id } }
    // { new: true }
  );
  return NextResponse.json(folder);
}

/*
postFolder('/folders', {"name": "string", "userId": 1})
1. folders 컬렉션에서 folder 도큐먼트 추가
2. users 컬렉션에서 해당 user에 folderId 배열에 추가
3. response[{"id": 132,"created_at": "2023-06-27T12:56:34.562802+00:00","name": "string","user_id": 4}]
*/


// export async function POST(req: NextRequest) {
//   await dbConnect();
//   const body = await req.json();
//   const folder = await FolderModel.create(body);

//   return NextResponse.json(folder);
// }

