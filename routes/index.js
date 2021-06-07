const router = require('express').Router();
const homeRoutes = require('./homeRoutes');

const itemRoutes = require('./itemRoutes')

router.use('/', homeRoutes);
router.use('/items', itemRoutes);

const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;