const express = require("express");

const router = express.Router();

const {
  getAllItems,
  getSingleItems,
  addItem,
  updateItem,
  deleteItem,
} = require("../controller/menuController");

router.get("/", getAllItems);

router.get("/:id", getSingleItems);

router.post("/", addItem);

router.patch("/:id", updateItem);

router.delete("/:id", deleteItem);

module.exports = router;
