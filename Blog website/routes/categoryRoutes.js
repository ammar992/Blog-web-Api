const express = require('express');
const router = express.Router();
const categoryController = require("../controllers/categoryController");



router.post('/category',categoryController.createCat);
router.get('/get/category',categoryController.getCat);


module.exports = router;