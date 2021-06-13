const express = require('express');
const router = express.Router();
const userController=require('../controllers/user.controller');
const authenticate=require('../middleware/authentication');

router.post('/login', userController.loginUser);
router.post('/createUser', authenticate,userController.createUser);
router.get('/getAllUsers', authenticate , userController.getAllUsers);
router.get('/getUserById/:id',authenticate, userController.getUserById);
router.put('/updateUser/:id',authenticate, userController.updateUser);
router.delete('/deleteUser/:id',authenticate, userController.deleteUser);
module.exports = router;