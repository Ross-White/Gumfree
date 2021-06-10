const router = require('express').Router();
const { User, Item, Categories } = require('../models');
const withAuth = require('../utils/auth');
const uploadS3 = require('../utils/multers3');


// render dashboard
router.get('/', withAuth, async (req, res) => {
    res.render('dashboard', {
        logged_in: req.session.logged_in,
    });
})

router.get('/additem', async (req, res) => {
    res.render('new-ad')
});

router.post('/formsub', uploadS3.single('product-image'), async (req, res, next) => {
    console.log('File Location:  ', req.file.location);
    console.log('Req body:  ', req.body);
    if (title && description && category && offered) {
        try {
            const itemData = await Item.create({
                title: req.body.title,
                description: req.body.description,
                category_id: req.body.category_id,
                offered: req.body.offered === "on" && true,
                available: true,
                user_id: req.session.user_id,
                location: req.session.location,
                image_url: req.file.location
            });
            // res.status(200).json(itemData);
            res.redirect('/dashboard')
        } catch (err) {
            res.status(400).json(err);
        }
    }
});

module.exports = router;