const express = require("express");
const {
  createExpCtrl,
  fetchAllExpCtrl,
  fetchExpDetailsCtrl,
  updateExpCtrl,
  deleteExpCtrl,
} = require("../controllers/expenseController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createExpCtrl);
router.get("/", authMiddleware, fetchAllExpCtrl);
router.get("/:id", authMiddleware, fetchExpDetailsCtrl);
router.put("/:id", authMiddleware, updateExpCtrl);
router.delete("/:id", authMiddleware, deleteExpCtrl);

module.exports = router;
