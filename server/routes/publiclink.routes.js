const router = require('express').Router();
const { PublicLinks } = require('../db/models/index');

router.route('/').get(async (req, res) => {
  const id = req.session?.user?.id;
  try {
    if (id) {
      const userLink = await PublicLinks.findOne({ where: { owner_id: id } }, { raw: true });
      if (userLink) {
        const { id: linkId, link } = userLink;
        return res.status(200).json({ linkId, link });
      }
      return res.status(401).end();
    }
    return res.status(401).end();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const { link } = req.body;
  const userId = req.session?.user?.id;
  try {
    if (userId) {
      const userLink = await PublicLinks.findOne({ where: { id } }, { raw: true });
      if (userLink) {
        if (userLink.owner_id === userId) {
          const updatedLink = await PublicLinks.update({ link }, { where: { id: Number(id) } });
          if (updatedLink) {
            return res.status(200).json({ text: 'OK' });
          }
        }
        return res.status(403).end();
      }
      return res.status(400).end();
    }
    return res.status(401).end();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
