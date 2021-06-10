const { Item } = require('../../models');

const postItemController = async (req, res) => {
    try {
        const itemData = await Item.create({
            title: req.body.title,
            description: req.body.description,
            category_id: req.body.category_id,
            offered: req.body.offered,
            available: true,
            user_id: req.session.user_id,
            location: req.session.location
        });
        res.status(200).json(itemData);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = postItemController;