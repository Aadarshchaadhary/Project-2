import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    Description: {
      type: String,
    },
    category: {
      type: String,
      enum: ["residental", "commercial", "infrastructure"],
    },
    status: {
      type: String,
      enum: ["ongoin", "completed"],
    },
    Location: String,
    StartDate: Date,
    EndDate: Date,
    createdAt: {
      type: Date,
      dafault: Date.now,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // name,description,category,
    // images,status,location,
    // startDate,EndDate,createdAt
  },
  { timestamps: true }
);
export const Project = mongoose.model("Project", projectSchema);
