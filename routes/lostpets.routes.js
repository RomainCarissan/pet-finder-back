const router = require("express").Router();
const LostPet = require("../models/LostPet.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

router.get("/", (req, res, next) => {
  LostPet.find({})
    .then((lostPets) => {
      console.log("Retrieved lost pets ->", lostPets);
      res.json(lostPets);
    })
    .catch((error) => {
      res.status(500).json({ message: "Error while getting all lost pets" });
      next(error);
    });
});

// Retrieves a specific lost pet by id
router.get("/:lostPetId", async (req, res, next) => {
  try {
    const lostPetId = req.params.lostPetId;
    const oneLostPet = await LostPet.findById(lostPetId);
    res.status(200).json(oneLostPet);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while getting a specific lost pet" });
    next(error);
  }
});

router.use(isAuthenticated);

const fileUploader = require("./../config/cloudinaryConfig");

// Creates a new lost pet
router.post("/", fileUploader.single("picture"), async (req, res, next) => {
  try {
    const creatorId = req.userId;
    let picture;
    if (req.file) {
      picture = req.file.path;
    }
    const lostPet = { ...req.body, creator: creatorId, picture };
    const createdLostPet = await LostPet.create(lostPet);
    res.status(201).json(createdLostPet);
  } catch (error) {
    res.status(500).json({ message: "Error while creating a new lost pet" });
    next(error);
  }
});

// Updates a specific lost pet by id
router.put("/:lostPetId", async (req, res, next) => {
  try {
    const lostPetId = req.params.lostPetId;
    const updatedLostPet = await LostPet.findByIdAndUpdate(
      lostPetId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedLostPet);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating a specific lost pet" });
    next(error);
  }
});

// Deletes a specific lost pet by id
router.delete("/:lostPetId", async (req, res, next) => {
  try {
    const lostPetId = req.params.lostPetId;
    const deletedLostPet = await LostPet.findByIdAndDelete(lostPetId);
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while deleting a specific lost pet" });
    next(error);
  }
});

module.exports = router;
