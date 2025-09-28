import mongoose from "mongoose";
import { type } from "os";

const orderItmeSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "prodcut",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItmes: {
      type: [orderItmeSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
      // when  the oder are  create
      // ,you have only 3 option (enum) ,
      // when your spelling will wrong then after your status will be pending
    },
  },
  { timestamps: true }
);
export const Order = mongoose.model("Order", orderSchema);
