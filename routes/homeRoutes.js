const router = require('express').Router();
const {User, Location, Item, Categories } = require('../models')

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

// render homepage
router.get('/', async (req, res) => {
    try {
        const catData = await Categories.findAll();

        const plainData = catData.map((cat) => cat.get({ plain: true }))
        res.render('homepage', {plainData})

    } catch (err) {
        res.status(403).json(err)
    }
})

module.exports = router;