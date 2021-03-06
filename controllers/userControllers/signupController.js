const { User } = require('../../models');

const signupController = async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            postcode: req.body.postcode,
        });
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            req.session.location = userData.location;
            res.json({ user: userData, message: 'You are now logged in!' });
        });
        console.log(userData);
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = signupController;