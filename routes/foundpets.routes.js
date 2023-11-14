const router = require("express").Router();
const FoundPet = require("../models/FoundPet.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

router.get("/", (req, res, next) => {
  FoundPet.find({})
    .then((foundPets) => {
      console.log("Retrieved found pets ->", foundPets);
      res.json(foundPets);
    })
    .catch((error) => {
      next(error);
    });
});

//Retrieves a specific pet found by id
router.get("/:foundPetId", async (req, res, next) => {
  try {
    const foundPetId = req.params.foundPetId;
    const oneFoundPet = await FoundPet.findById(foundPetId);
    res.status(200).json(oneFoundPet);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while getting a specific pet found" });
    next(error);
  }
});

router.use(isAuthenticated);

// Retrieves a specific lost pet by the creator ID
router.get("/creator/:foundPetCreatorId", async (req, res, next) => {
  try {
    const creatorId = req.params.foundPetCreatorId;
    const foundPetReports = await FoundPet.find({ creator: creatorId });
    if (foundPetReports.length === 0) {
      return res
        .status(404)
        .json({ message: "No found pets found for this creator" });
    }
    res.status(200).json(foundPetReports);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while getting all found reports by creator" });
    next(error);
  }
});

const fileUploader = require("./../config/cloudinaryConfig");

//Creates a new found pet
router.post("/", fileUploader.single("picture"), async (req, res, next) => {
  try {
    const creatorId = req.userId;
    let picture;
    if (req.file) {
      picture = req.file.path;
    }
    const foundPet = { ...req.body, creator: creatorId, picture };
    const createdFoundPet = await FoundPet.create(foundPet);
    res.status(201).json(createdFoundPet);
  } catch (error) {
    next(error);
  }
});

//Updates a specific foundpet by id
router.put(
  "/:foundPetId",
  fileUploader.single("picture"),
  async (req, res, next) => {
    try {
      const foundPetId = req.params.foundPetId;
      let picture;
      if (req.file) {
        picture = req.file.path;
      }
      console.log(req.file);
      const updateFields = { ...req.body };
      if (picture) {
        updateFields.picture = picture;
      }
      const updatedFoundPet = await FoundPet.findByIdAndUpdate(
        foundPetId,
        updateFields,
        {
          new: true,
        }
      );
      res.status(200).json(updatedFoundPet);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error while updating a specific pet found" });
      next(error);
    }
  }
);

//Deletes a specific pet found by id
router.delete("/:foundPetId", async (req, res) => {
  try {
    const foundPetId = req.params.foundPetId;
    const deletedFoundPet = await FoundPet.findByIdAndDelete(foundPetId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Error while deleting a specific cohort" });
    next(error);
  }
});

module.exports = router;
