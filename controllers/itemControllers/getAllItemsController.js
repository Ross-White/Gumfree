const { Item, User } = require('../../models');

const getAllItemsController = async (req, res) => {
    try {
        const rawItems = await Item.findAll({
            include: [
                {
                    model: User,
                }
            ]
        });
        const items = rawItems.map((item) => item.get({ plain: true }));
        res.render('all-items', { 
            items,
            logged_in: req.session.logged_in,
         });
    } catch (err) {
        res.status(500).json(err);
    }
};
module.exports = getAllItemsController;