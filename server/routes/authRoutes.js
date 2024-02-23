const express = require('express');
const router = express.Router();

const authController = require('../middlewares/controllers/authController');

router.route('/signin').post(authController.signin);
router.route('/register').post(authController.register);

module.exports = router;