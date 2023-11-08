const router = require("express").Router();
const FoundPet = require("../models/FoundPet.model");

router.get("/", (req, res, next) => {
  FoundPet.find({})
    .then((foundPets) => {
      console.log("Retrieved found pets ->", foundPets);
      res.json(foundPets);
    })
    .catch((error) => {
      res.status(500).json({ message: "Error while getting all found pets" });
      next(error);
    });
});

//Creates a new found pet
router.post("/", async (req, res, next) => {
  try {
    const foundPet = { ...req.body };
    const createdFoundPet = await FoundPet.create(foundPet);
    res.status(201).json(createdFoundPet);
  } catch (error) {
    res.status(500).json({ message: "Error while creating a new found pet" });
    next(error);
  }
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

//Updates a specific cohort by id
router.put("/:foundPetId", async (req, res, next) => {
  try {
    const foundPetId = req.params.foundPetId;
    const updatedFoundPet = await FoundPet.findByIdAndUpdate(
      foundPetId,
      req.body,
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
});

//Deletes a specific pet found by id
router.delete("/:foundPetId", async (req, res) => {
  try {
    const foundPetId = req.params.foundPetId;
    const deletedFoundPet = await FoundPet.findByIdAndDelete(foundPetId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error while deleting a specific cohort" });
    next(error);
  }
});

module.exports = router;
