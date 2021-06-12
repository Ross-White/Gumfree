const router = require('express').Router();
const updateItemController = require('../../controllers/itemControllers/updateItemController');
const deleteItemController = require('../../controllers/itemControllers/deleteItemController');

router.put('/:id', updateItemController);
router.delete('/:id', deleteItemController);


module.exports = router;