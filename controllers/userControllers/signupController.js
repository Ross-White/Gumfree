const { User } = require('../../models');

const signupController = async (req, res) => {
    try {
        // let point = {
        //     type: 'Point',
        //     coordinates: [req.body.long, req.body.lat],
        // }
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            location: point
        });
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({ user: userData, message: 'You are now logged in!' });
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
};



module.exports = signupController;