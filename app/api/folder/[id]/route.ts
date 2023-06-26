import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbConnect";
import { FolderModel } from "@/lib/models/folder";

export async function GET(
  req: NextRequest,
  { params }: { params: { folderId: string } }
) {
  await dbConnect();
  const folder = await FolderModel.findById(params.folderId);
  return NextResponse.json(folder);
}
