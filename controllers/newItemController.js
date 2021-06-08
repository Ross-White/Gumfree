const { Item } = require('../models');

const newItemController = async (req, res) => {
    try {
        const itemData = await Item.create({
            //TODO add columns
        })
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = newItemController;