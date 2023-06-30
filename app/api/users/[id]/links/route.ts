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

  let linkData;

  if (!folderId) {
    linkData = await LinkModel.find({
      userId: params.id,
    });
  } else {
    linkData = await LinkModel.find({
      userId: params.id,
      folderId: folderId,
    });
  }

  return NextResponse.json(linkData);
}
