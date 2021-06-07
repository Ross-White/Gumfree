const { User } = require('../../models');

const loginController = async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Unable to login' });
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = loginController;