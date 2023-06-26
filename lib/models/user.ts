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
username: { type: String, required: true },
password: { type: String  },
email: { type: String, required: true },
folders: [{ type: Schema.Types.ObjectId, ref: 'Folder' }]
*/
