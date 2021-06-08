const router = require('express').Router();
const {User, Item, Categories } = require('../models');
const withAuth = require('../utils/auth');


// render dashboard
router.get('/', withAuth, async (req, res) => {
    res.render('dashboard')
})

module.exports = router;