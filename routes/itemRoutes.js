const router = require('express').Router();

const {User, Location, Item, Categories } = require('../models')

router.get('/', async (req, res) => {
    try {
        const itemData = await Item.findAll();
        res.status(200).json(itemData)
    } catch(err) {
        res.status(400).json(err)
    }
})

// render items by category page
router.get('/category/:id', async (req, res) => {
    try {
        const itemData = await Item.findAll({
            where: {
                category_id: req.params.id,
            }
        })
        const items = itemData.map((item) => item.get({ plain: true }))
        // res.status(200).json(itemData)
        res.render('items-page', { items })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;