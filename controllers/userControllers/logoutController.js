const logoutController = async (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
          res.json({ message: 'You have logged out.' })
          res.status(204).end();
        });
      } else {
        res.status(404).end();
      }
};

module.exports = logoutController;