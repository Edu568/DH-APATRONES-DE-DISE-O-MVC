const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');
const productController = require('../controllers/productController');


router.get("/", controller.index);
router.get("/contacto", controller.contact);




module.exports = router;
