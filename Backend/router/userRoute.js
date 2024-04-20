const express = require("express");
const router = express.Router();
const useCtrl = require('../controller/userCtrl');

// Route to handle create operation
router.post('/create', useCtrl.create);
router.put('/update/:id', useCtrl.update);
module.exports = router;
