const express = require("express");

const router = express.Router();

router.get("/", () => {
  console.log("all menu items");
});

export default router;
