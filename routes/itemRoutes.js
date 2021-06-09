const router = require('express').Router();
const { User, Item, Categories } = require('../models');
const withAuth = require('../utils/auth');
const getAllItemsController = require('../controllers/itemControllers/getAllItemsController');

router.get('/', withAuth, async (req, res) => {
    try {
        const itemData = await Item.findAll();
        res.status(200).json(itemData)
    } catch (err) {
        res.status(400).json(err)
    }
})

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
        // res.status(200).json(itemData)
        res.render('items-page', {
            items,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/all', (req, res) => {
    res.render('all-items');
});

module.exports = router;