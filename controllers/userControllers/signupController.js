const { User } = require('../../models');

const signupController = async (req, res) => {
    try {
        let point = {
            type: 'Point',
            coordinates: [req.body.long, req.body.lat],
        }
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            position: point
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
};



module.exports = signupController;