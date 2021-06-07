const router = require('express').Router();

const postItemController = require('../../controllers/itemControllers/postItemController');
const updateItemController = require('../../controllers/itemControllers/updateItemController');

router.post('/', postItemController);
router.put('/:id', updateItemController);

module.exports = router;