const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const lostPetSchema = new Schema(
  {
    isLost: {
      type: Boolean, //will be lost to create future notifications
      default: true,
    },

    creator: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },

    petName: {
      type: String,
      required: [true, "petName is required."],
    },

    lossDate: {
      type: Date,
      default: Date.now,
      required: [true, "lossDate is required."],
    },

    petType: {
      type: String,
      enum: ["Dog", "Cat", "Exotic"],
      required: [true, "petType is required."],
    },

    petSex: {
      type: String,
      enum: ["Male", "Female", "I don't know"],
      required: [true, "petSex is required."],
    },

    sterilized: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
      required: [true, "sterilized is required."],
    },

    identification: {
      type: String, //will be used to create future notifications
    },

    breed: {
      type: String,
      required: [true, "breed is required."],
    },

    mixed: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
      required: [true, "mixed is required."],
    },

    colors: {
      type: String,
    },

    age: {
      type: Number,
      required: [true, "age is required."],
    },

    ageUnit: {
      type: String,
      enum: ["year(s)", "month(s)"],
      required: [true, "ageUnit is required."],
    },

    picture: {
      type: String,
      default:
        "https://fourleggedguru.com/wp-content/uploads/2015/03/fd928cb7bd8a6e81708f29e3711afd5e.jpg",
    },

    description: {
      type: String,
    },

    lossPlace: {
      type: String,
      required: [true, "lossPlace is required."],
    },

    latLon: {
      type: String, //is stored on this format "lat,lon"
    }, //can easily be get individualy in the front (searchPlaceInput)
  },
  {
    timestamps: true,
  }
);

const LostPet = model("LostPet", lostPetSchema);

module.exports = LostPet;
