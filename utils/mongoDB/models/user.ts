import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    image_source: { type: String },
    folder_id: [{ type: Schema.Types.ObjectId, ref: "Folder", required: true }],
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  },
);

export const UserModel =
  mongoose.models.User || mongoose.model("User", UserSchema);
