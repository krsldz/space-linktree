const router = require('express').Router();

const { User } = require('../db/models/index');

router.get('/', async (req, res) => {
  const id = req.session?.user?.id;
  try {
    if (id) {
      const currentUser = await User.findOne({ where: { id } }, { raw: true });
      if (currentUser) {
        const { dataValues: { email, name } } = currentUser;
        return res.json({ email, name, id });
      }
      return res.status(401).end();
    }
    return res.status(401).end();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
