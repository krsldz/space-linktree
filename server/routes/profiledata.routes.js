const express = require('express');
const multer = require('multer');
const { ProfileData } = require('../db/models/index');

const upload = multer({ dest: 'public/uploads' });

const router = express.Router();

router.route('/').get(async (req, res) => {
  const id = req.session?.user?.id;
  try {
    if (id) {
      const data = await ProfileData.findOne(
        {
          where: { user_id: +id },
          attributes: { exclude: ['createdAt', 'updatedAt', 'user_id'] },
        },
        { raw: true },
      );
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
}).put(upload.any(), async (req, res) => {
  const userId = req.session?.user?.id;
  const { data, id } = req.body;
  const avatar = req.files[0]?.filename;
  try {
    if (userId) {
      const currData = await ProfileData.findOne({ where: { user_id: userId } }, { raw: true });
      if (currData && currData.dataValues.id === Number(id)) {
        const updatedData = await ProfileData.update(
          avatar ? { ...data, avatar } : data,
          { where: { id: Number(id) } },
        );
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
