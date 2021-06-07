const router = require('express').Router();

const {User, Location, Item, Categories } = require('../models')

router.get('/', async (req, res) => {
    try {
        const itemData = await Item.findAll();
    } catch(err) {
        res.status(400).json(err)
    }
})

// render items by cetgory page
router.get('category/:id', async (req, res) => {
    try {
        const itemData = await Item.findAll({
            where: {
                category_id: req.params.id,
            },
        })

        const items = itemData.map((item) => item.get({ plain: true }))
        res.render('items-page', { items })
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get('/items', (req, res) => {
    res.render('items');
});


module.exports = router;