const router = require('express').Router();
const {User, Location, Item, Categories } = require('../models')


// render dashboard
router.get('/', (req, res) => {
    res.render('dashboard')
})

module.exports = router;