const router = require('express').Router();

const {User, Location, Item, Categories } = require('../models')

router.get('/', async, (req, res) => {
    try {
        const itemData = await Item.findAll();
    } catch(err) {
        res.status(400).json(err)
    }
})


router.get('/items', (req, res) => {
    res.render('items');
});


module.exports = router;