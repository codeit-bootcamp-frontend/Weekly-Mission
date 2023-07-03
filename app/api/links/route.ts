import { NextRequest, NextResponse } from "next/server";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { OpenGraphScraperOptions } from "open-graph-scraper/dist/lib/types";

import dbConnect from "@/utils/mongoDB/dbConnect";
import { FolderModel } from "@/utils/mongoDB/models/folder";
import { LinkModel } from "@/utils/mongoDB/models/link";

export async function GET() {
  await dbConnect();
  const links = await LinkModel.find();
  return NextResponse.json(links);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const ogs = require("open-graph-scraper");
  const options = { url: body.url };
  const { result } = await ogs(options);

  if (result) {
    body.title = result.ogTitle || null;
    body.description = result.ogDescription || null;
    body.image_source = result.ogImage ? result.ogImage[0].url : null;
  }

  const link = await LinkModel.findOne({ url: body.url, user_id: body.userId });

  const { folderId, userId, ...rest } = body;
  const newObj = folderId
    ? { ...rest, folder_id: [folderId], user_id: userId }
    : { ...rest, user_id: userId };

  let response;

  if (body.folderId && link) {
    if (!link.folder_id.includes(body.folderId)) {
      const newLink = await LinkModel.findByIdAndUpdate(
        link._id,
        {
          $push: { folder_id: body.folderId },
        },
        { new: true },
      );
      await FolderModel.findByIdAndUpdate(
        body.folderId,
        {
          $push: { link_id: link._id },
        },
        { new: true },
      );
      response = newLink;
    } else
      return NextResponse.json(
        { message: "이미 추가된 링크입니다" },
        { status: 501 },
      );
  } else if (body.folderId && !link) {
    const newLink = await LinkModel.create(newObj);
    await FolderModel.findByIdAndUpdate(
      body.folderId,
      {
        $push: { link_id: newLink._id },
      },
      { new: true },
    );
    response = newLink;
  } else if (!body.folderId && !link) {
    response = await LinkModel.create(newObj);
  } else
    return NextResponse.json(
      { message: "이미 추가된 링크입니다" },
      { status: 501 },
    );

  return NextResponse.json(response);
}
