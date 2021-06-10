const router = require('express').Router();
const {User, Item, Categories } = require('../models');
const withAuth = require('../utils/auth');
const uploadS3 = require('../utils/multers3')


// render dashboard
router.get('/', withAuth, async (req, res) => {
    res.render('dashboard', {
        logged_in: req.session.logged_in,
    });
})

router.get('/additem', async (req, res)=> {
    res.render('new-ad')
});

router.post('/formsub', uploadS3.single('product-image'), (req, res, next)=>{
    // res.json(req.file);
    res.redirect('/dashboard')
    console.log(req.file);
  })

module.exports = router;