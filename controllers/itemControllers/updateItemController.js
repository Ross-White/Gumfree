const { Item } = require('../../models');

const updateItemController = async (req, res) => {
    try {
        const itemData = await Item.update(
            {
                title: req.body.title,
                description: req.body.description,
                quantity: req.body.quantity,
                offered: req.body.offered,
                available: req.body.available
            },
            {
                where: {
                    id: req.params.id
                },
            }
        )
        res.status(200).json(itemData);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = updateItemController;