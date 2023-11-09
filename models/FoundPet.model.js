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
      enum: ["Dog", "Cat", "NAC", "Other"],
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

    colors: {
      type: String,
      enum: [
        // The enum is temporary, it will be handle by a form on the front
        //cat colors
        "White",
        "Blue",
        "Blue Point",
        "Brown",
        "Chinchilla",
        "Chocolate",
        "Color Point",
        "Cream",
        "Diluted",
        "Tortoiseshell",
        "Gray",
        "Hare",
        "Marbled",
        "Brown",
        "Black",
        "Red Point",
        "Red Tabby",
        "Red",
        "Seal Point",
        "Silver",
        "Smoke",
        "Tabby",
        "Tiger",
        "Tortie Tabby",
        "Tricolor",

        //dogs colors
        "Apricot",
        "Harlequin",
        "Beige",
        "White",
        "Blue",
        "Blue Fawn",
        "Brindle Blue",
        "Light Brindle",
        "Dark Brindle",
        "Black Brindle",
        "Brown",
        "Quail",
        "Champagne",
        "Charred",
        "Chocolate",
        "Cream",
        "Golden",
        "Fawn",
        "Fire",
        "Liver",
        "Golden",
        "Gray",
        "Brown",
        "Merle",
        "Speckled",
        "Black",
        "Orange",
        "Red",
        "Red",
        "Sand",
        "Silver",
        "Tricolor",
        "Trout",
        "Sable",
      ],
    },

    picture: {
      type: String,
      default: "",
    },

    description: {
      type: String,
    },

    foundPlace: {
      type: String,
      required: [true, "foundPlace is required."],
    },
  },
  {
    timestamps: true,
  }
);

const FoundPet = model("FoundPet", foundPetSchema);

module.exports = FoundPet;
