import mongoose from "mongoose";
import { Schema } from "mongoose";

const LinkSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    image_source: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    folderId: [{ type: Schema.Types.ObjectId, ref: "Folder", required: true }],
  },
  { timestamps: true, versionKey: false }
);

export const LinkModel =
  mongoose.models.Link || mongoose.model("Link", LinkSchema);

  /*
      "url": "https://www.codeit.kr/",
      "title": "코드잇 | 코딩, 쉬워질 때도 됐다",
      "description": "월 2만원대로 Python, JavaScript, HTML/CSS 등 3,000개 이상 프로그래밍 강의를 배워보세요!",
      "image_source": "/static/images/brand/og_tag.png",
      "folder_id": 12
  */
