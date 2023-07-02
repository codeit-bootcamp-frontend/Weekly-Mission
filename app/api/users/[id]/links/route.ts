import { NextRequest, NextResponse } from "next/server";

import dbConnect from "@/utils/mongoDB/dbConnect";
import { LinkModel } from "@/utils/mongoDB/models/link";
import { UserModel } from "@/utils/mongoDB/models/user";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const folderId = searchParams.get("folderId") || undefined;
  await UserModel.findById(params.id);

  let linkData;

  if (!folderId) {
    linkData = await LinkModel.find({
      user_id: params.id,
    }).sort({ created_at: -1 });
  } else {
    linkData = await LinkModel.find({
      user_id: params.id,
      folder_id: folderId,
    }).sort({ created_at: -1 });
  }

  return NextResponse.json(linkData);
}
