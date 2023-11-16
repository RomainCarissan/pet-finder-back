const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required."],
    },
    name: {
      type: String,
      required: [true, "name is required."],
    },
    lastName: {
      type: String,
      required: [true, "lastName is required."],
    },
    address: {
      type: String,
      required: [true, "adress is required."],
    },
    phone: {
      type: String,
      required: [true, "phone is required."],
    },
    department: {
      type: String,
      required: [true, "departement is required."],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
