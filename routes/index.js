const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const itemRoutes = require('./itemRoutes')

router.use('/', homeRoutes);
router.use('/items', itemRoutes);
router.use('/api', apiRoutes);


module.exports = router;