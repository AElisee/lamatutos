const mongoose = require("mongoose");
const { Schema } = "mongoose";

const GigSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    totalStarts: {
      type: Number,
      default: 0,
    },
    starNumber: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      riquired: false,
    },
    shortTitle: {
      type: String,
      riquired: true,
    },
    shortDesc: {
      type: String,
      riquired: true,
    },
    deliveryTime: {
      type: Number,
      riquired: true,
    },
    RevesionNumber: {
      type: Number,
      riquired: true,
    },
    features: {
      type: [String],
      required: false,
    },
    sales: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", GigSchema);
