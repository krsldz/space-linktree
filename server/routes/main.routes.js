const router = require('express').Router();
const { ProfileData, PublicLinks } = require('../db/models/index');

router.route('/:link').get(async (req, res) => {
  const { link } = req.params;
  try {
    const userLink = await PublicLinks.findOne({ where: { link: `http://localhost:3000/${link}` } }, { raw: true });
    if (userLink) {
      const data = await ProfileData.findOne(
        {
          where: { public_id: userLink.id },
          attributes: { exclude: ['createdAt', 'updatedAt', 'user_id'] },
        },
        { raw: true },
      );
      if (data) {
        const { dataValues } = data;
        return res.status(200).json(dataValues);
      }
    }
    return res.status(404).end();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
