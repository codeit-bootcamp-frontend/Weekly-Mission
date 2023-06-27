import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConnect";
import { FolderModel } from "@/lib/models/folder";
import { LinkModel } from "@/lib/models/link";

export async function GET(req: NextRequest) {
  await dbConnect();
  const links = await LinkModel.find();
  return NextResponse.json(links);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();
  const link = await LinkModel.create(body);

  // const folder = await FolderModel.findByIdAndUpdate(
  //   body.userId,
  //   { $push: { links: link._id } }
  // );

  return NextResponse.json(link);
}

// link에 추가

/*
folder가 있을 경우 : folder에 같이 추가
없을 경우: 

*/
// links에서 user 필터
// 전체 links에서 folderid로 



//link 추가하면? links에 데이터 추가 + (folder가 있을 경우)folders links에 추가가 되어야함.

/*
추가하는 데이터
{
  "url": "string",
  "userId": 1,
  "folderId": 1
}*/
