const router = require('express').Router();

const postItemController = require('../../controllers/itemControllers/postItemController');
const updateItemController = require('../../controllers/itemControllers/updateItemController');
const deleteItemController = require('../../controllers/itemControllers/deleteItemController');

router.post('/', postItemController);
router.put('/:id', updateItemController);
router.delete('/:id', deleteItemController);

module.exports = router;