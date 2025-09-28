import mongoose from "mongoose";
import { blob } from "stream/consumers";

const serviceSchema = new mongoose.Schema(
  {
    Tittle: {
      type: String,
      required: true,
      tirm: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    Description: {
      type: String,
      required: true,
      default: [],
    },
    icon: {
      type: String,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Service = mongoose.model("Service", serviceSchema);

// tittle,description,icon,createdAt
