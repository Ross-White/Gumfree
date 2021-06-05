const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

// render homepage
router.get('/', (req, res) => {
    res.render('homepage')
})

module.exports = router;