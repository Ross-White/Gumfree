const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const itemRoutes = require('./itemRoutes')
const dashboardRoutes = require('./dashboardRoutes')

router.use('/', homeRoutes);
router.use('/items', itemRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;