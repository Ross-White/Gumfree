const router = require('express').Router();
const newItemController = require('../../controllers/newItemController')

router.post('/new', newItemController)

module.exports = router;