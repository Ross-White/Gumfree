const { User } = require('../models');

const loginController = async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        console.log(userData);
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Unable to login' });
            return;
        }            
        res.json({ user: userData, message: 'You are now logged in!' });
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = loginController; 