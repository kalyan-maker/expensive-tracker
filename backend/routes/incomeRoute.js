const express = require("express");
const {
  createIncCtrl,
  fetchAllIncCtrl,
  fetchIncDetailsCtrl,
  updateIncCtrl,
  deleteIncCtrl,
} = require("../controllers/incomeController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createIncCtrl);
router.get("/", authMiddleware, fetchAllIncCtrl);
router.get("/:id", authMiddleware, fetchIncDetailsCtrl);
router.put("/:id", authMiddleware, updateIncCtrl);
router.delete("/:id", authMiddleware, deleteIncCtrl);

module.exports = router;
