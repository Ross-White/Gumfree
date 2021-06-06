const router = require('express').Router();
const signupController = require('../../controllers/signupController');
const loginController = require('../../controllers/loginController');


router.post('/', signupController);
router.post('/login', loginController);


module.exports = router;