const router = require("express").Router();
const FoundPet = require("../models/FoundPet.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const fileUploader = require("./../config/cloudinaryConfig");

//Doesn't pass througt the is Authenticated middlewhere
//Retrieves all the found pets thants to /api/foundpets/
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
    const oneFoundPet = await FoundPet.findById(foundPetId)
      .populate({
        path: "creator",
        select: "name lastName address phone",
      })
      .exec();
    res.status(200).json(oneFoundPet);
  } catch (error) {
    next(error);
  }
});

router.use(isAuthenticated); // The following routes goes througt the middlewhere to be accessed

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
    next(error);
  }
});

//Creates a new found pet
router.post("/", fileUploader.single("picture"), async (req, res, next) => {
  try {
    const creatorId = req.userId; //get the current user's id thanks to the isAuthenticated
    let picture;
    if (req.file) {
      picture = req.file.path;
    }
    const foundPet = { ...req.body, creator: creatorId, picture }; //set the current user, as the creator of the new post
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
    next(error);
  }
});

module.exports = router;
