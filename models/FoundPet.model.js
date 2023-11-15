const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const foundPetSchema = new Schema(
  {
    isLost: {
      type: Boolean,
      default: true,
    },

    creator: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },

    petName: {
      type: String,
    },

    foundDate: {
      type: Date,
      default: Date.now,
      required: [true, "foundDate is required."],
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

    identification: {
      type: String,
    },
    breed: {
      type: String,
    },

    colors: {
      type: String,
    },

    picture: {
      type: String,
      default:
        "https://fourleggedguru.com/wp-content/uploads/2015/03/fd928cb7bd8a6e81708f29e3711afd5e.jpg",
    },

    description: {
      type: String,
    },

    foundPlace: {
      type: String,
      required: [true, "foundPlace is required."],
    },

    latLon: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const FoundPet = model("FoundPet", foundPetSchema);

module.exports = FoundPet;
