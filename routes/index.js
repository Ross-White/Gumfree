const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const itemRoutes = require('./itemRoutes')

router.use('/', homeRoutes);
router.use('/items', itemRoutes);

module.exports = router;