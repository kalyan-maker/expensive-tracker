const express = require("express");
const accountStatsCtrl = require("../controllers/accountController");

const router = express.Router();

router.get("/api/accounts-statistics", accountStatsCtrl);

module.exports = router;
