const express = require("express");

const router = express.Router();

const authenticate = require("../middlewares/authmiddleware"); // Verify JWT token
const authorize = require("../middlewares/roleMiddleware"); // Check user role

const {
  getAllItems,
  getSingleItems,
  addItem,
  updateItem,
  deleteItem,
} = require("../controller/menuController");

router.get("/", getAllItems);

router.get("/:id", getSingleItems);

router.post("/", authenticate, authorize("admin"), addItem);

router.patch("/:id", updateItem);

router.delete("/:id", deleteItem);

module.exports = router;
