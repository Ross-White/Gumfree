const router = require('express').Router();

const postItemController = require('../../controllers/itemControllers/postItemController');

router.post('/', postItemController);

module.exports = router;