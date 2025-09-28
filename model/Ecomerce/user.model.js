import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
      unquie: true,
    },
    email: {
      type: String,
      required: true,
      unqiue: true,
      lowercase: true,
    },
    password: {
      type: String,
      unqiue: true,
      required: true,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
