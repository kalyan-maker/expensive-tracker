const express = require("express");
const {
  registerUser,
  fetchUsersCtrl,
  loginUserCtrl,
  userProfileCtrl,
  updateUserCtrl,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.get("/profile", authMiddleware, userProfileCtrl);
router.put("/update", authMiddleware, updateUserCtrl);
router.post("/login", loginUserCtrl);
router.get("/", authMiddleware, fetchUsersCtrl);

module.exports = router;
