const express = require('express');
const { ProfileData } = require('../db/models/index');

const router = express.Router();

router.route('/').get(async (req, res) => {
  const id = req.session?.user?.id;
  try {
    if (id) {
      const data = await ProfileData.findOne({ where: { user_id: +id } }, { raw: true });
      if (data) {
        const { dataValues } = data;
        return res.status(200).json(dataValues);
      }
      return res.status(403).end();
    }
    return res.status(401).end();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}).put(async (req, res) => {
  const userId = req.session?.user?.id;
  const { data, id } = req.body;
  try {
    if (userId) {
      const currData = await ProfileData.findOne({ where: { user_id: userId } }, { raw: true });
      if (currData && currData.id === id) {
        const updatedData = await ProfileData.update(data, { where: { id: Number(id) } });
        if (!updatedData) {
          return res.status(500).json({ error: 'Data cannot be updated, please try again' });
        }
        return res.status(200).json({ text: 'OK' });
      }
      return res.status(403).end();
    }
    return res.status(401).end();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
