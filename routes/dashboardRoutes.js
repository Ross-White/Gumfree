const router = require('express').Router();
const { Item } = require('../models');
const withAuth = require('../utils/auth');
const uploadS3 = require('../utils/multers3');


// render dashboard
router.get('/', withAuth, async (req, res) => {
    try {
        const itemData = await Item.findAll({
            where: {
                user_id: req.session.user_id,
                available: true,
            }
        }
        );
        const items = itemData.map((item) => item.get({ plain: true }))
        res.render('dashboard', {
        items,
        logged_in: req.session.logged_in,
        isOwner: true,
    });
    } catch (err) {
        res.status(403).json(err)
    }
})

router.get('/additem', async (req, res) => {
    res.render('new-ad')
});

router.post('/formsub', uploadS3.single('product-image'), async (req, res, next) => {
        try {
            console.log(req.body);
            await Item.create({
                title: req.body.title,
                description: req.body.description,
                category_id: req.body.category_id,
                offered: req.body.offered === "on" && true,
                available: true,
                user_id: req.session.user_id,
                location: req.session.location,
                image_url: req.file.location
            });
            res.redirect('/dashboard')
        } catch (err) {
            res.status(400).json(err);
        }
});

module.exports = router;