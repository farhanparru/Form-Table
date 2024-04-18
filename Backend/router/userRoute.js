const express = require("express");
const router = express.Router();
const useCtrl = require('../controller/userCtrl');

//
router

.put('/update/:id', useCtrl.update);

module.exports = router;
