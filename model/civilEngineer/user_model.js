import mongoose from "mongoose";

const userSchema = new mongoose.schema(
  {
    Full_Name: {
      type: String,
      trim: true,
      minLenght: 3,
      required: true,
    },
    Last_Name: {
      type: String,
      trim: true,
      minLenght: 3,
      required: true,
    },
    Email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    Password: {
      type: String,
      required: [true, "password must be required"],
    },
    isActive: Boolean,
    role: {
      type: String,
      enum: ["admin", "client"],
      default: "client",
    },

    Contact: Number,
    Picuture: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
