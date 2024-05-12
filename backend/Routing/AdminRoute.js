const express = require("express");
const router = express.Router();
const {
  AddCategory,
  ViewCategory,
  DeleteCategory,
} = require("../Controllers/AdminController");
const Upload = require("../Multer/Multer");
const Verifytoken = require("../Middleware/Jwt");

router.post("/addcategory", Upload.single("caticon"), AddCategory);
router.get("/viewcategory", Verifytoken, ViewCategory);
router.delete("/deletecategory/:id", DeleteCategory);

module.exports = router;
