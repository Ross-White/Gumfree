const router = require('express').Router();
const signupController = require('../../controllers/signupController');
const loginController = require('../../controllers/loginController');
const logoutController = require('../../controllers/userControllers/logoutController');

router.post('/', signupController);
router.post('/login', loginController);
router.post('/logout', logoutController);


module.exports = router;