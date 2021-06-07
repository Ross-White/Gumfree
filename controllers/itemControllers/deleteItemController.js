const { Item } = require('../../models');

const deleteItemController = async (req, res) => {
    try {
        const itemData = await Item.destroy(
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

module.exports = deleteItemController;