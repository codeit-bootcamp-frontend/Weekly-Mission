import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String },
    email: { type: String, required: true },
    folders: [{ type: Schema.Types.ObjectId, ref: "Folder" }],
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
