const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersController");

/* GET users listing. */
router.get("/", controller.index);
router.get("/search", controller.search);

module.exports = router;
