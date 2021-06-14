const express = require('express');
const router = express.Router();
const paymentController=require('../controllers/payment.controller');

router.get('/createOrder/:amount', paymentController.createOrder);
router.get('/successOrder', paymentController.successOrder);

module.exports = router;