const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const itemRoutes = require('./itemRoutes.js')

router.use('/users', userRoutes);
router.use('/items', itemRoutes)

module.exports = router;