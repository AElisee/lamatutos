const mongoose = require("mongoose");
const { Schema } = "mongoose";

const OderSchema = new Schema(
  {
    gigId: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    SellerId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    payement_intent: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", OderSchema);
