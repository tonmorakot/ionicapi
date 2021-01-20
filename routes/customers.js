const express = require("express");
const router = express.Router();
const controller = require("../controllers/customersController");

router.get("/", controller.index);

module.exports = router;
