const { Item } = require('../../models');

const postItemController = async (req, res) => {
    try {
        const itemData = await Item.create(req.body);
        res.status(200).json(itemData);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = postItemController;