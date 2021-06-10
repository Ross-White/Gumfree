const router = require('express').Router();
const {User, Item, Categories } = require('../models');
const withAuth = require('../utils/auth');


// render dashboard
router.get('/', withAuth, async (req, res) => {
    res.render('dashboard', {
        logged_in: req.session.logged_in,
    });
})

router.get('/additem', async (req, res)=> {
    res.render('new-ad')
});

module.exports = router;