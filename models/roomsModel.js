const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    roomNumber: {
      type: Number,
      required: [true, "Room number is required"],
    },
    pricePerDay: {
      type: Number,
      required: [true, "Price per day is required"],
    },
    catigory: {
      type: String,
      required: [true, "phone no is required"],
    },
  },
);

const roomModel = mongoose.model("rooms", roomSchema);
module.exports = roomModel;
