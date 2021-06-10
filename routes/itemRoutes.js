const router = require('express').Router();
const { User, Item, Categories } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const itemData = await Item.findAll({
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

router.get('/:id', async (req, res) => {
    try {
        const itemData = await Item.findByPk(req.params.id,{
            include: 
            {
                model: User,
                attributes: ["username", "email", "location"]
            },
        });
        res.status(200).json(itemData);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.get('/new', (req, res) => {
    res.send('New item page')
})

// render items by category page
router.get('/category/:id', withAuth, async (req, res) => {
    try {
        const itemData = await Item.findAll({
            where: {
                category_id: req.params.id,
            }
        })
        const items = itemData.map((item) => item.get({ plain: true }))
        res.render('items-page', {
            items,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get('/location', async (req, res) => {
    try {
        const itemData = await Item.findAll({
            where: {
                location: req.session.location,
            }
        })
        // const items = itemData.map((item) => item.get({ plain: true }))
        console.log('Session Location:::::  ', req.session.location);
        res.status(200).json(itemData);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/all', (req, res) => {
    res.render('all-items');
});


module.exports = router;