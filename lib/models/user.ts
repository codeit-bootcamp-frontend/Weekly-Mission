import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    image_source: { type: String },
    folderId: [{ type: Schema.Types.ObjectId, ref: "Folder", required: true }],
  },
  { timestamps: true, versionKey: false }
);

export const UserModel =
  mongoose.models.User || mongoose.model("User", UserSchema);

/*
  "name": "코드잇",
  "image_source": "https://codeit-images.codeit.com/badges/COMPLETE_100_LESSONS.png",
  "email": "codeit@codeit.com"
*/
