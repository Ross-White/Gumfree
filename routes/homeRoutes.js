const router = require('express').Router();
const {User, Location, Item, Categories } = require('../models');
const withAuth = require('../utils/auth');

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
        res.render('homepage', {
        plainData,
        logged_in: req.session.logged_in,
    });
    } catch (err) {
        res.status(403).json(err)
    }
})

router.get('/location', withAuth, async (req, res) => {
    try {
        const itemData = await Item.findAll({
            where: {
                location: req.session.location,
                available: true,
            },
            include: 
            {
                model: User,
                attributes: ["username", "email", "location"]
            },
        });
        const items = itemData.map((item) =>item.get({ plain: true }));
        res.render('all-items', {
            items
        })
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;