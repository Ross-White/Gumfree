const router = require('express').Router();
const signupController = require('../../controllers/userControllers');

router.post('/', signupController);

module.exports = router;