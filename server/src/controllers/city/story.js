const express = require('express');
const { cloudinary } = require('../utilities/cloudinary');

const app = express();

app.post('/api/upload', async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'dev_setups',
    });
    console.log(uploadResponse);
    res.json({ msg: 'uploaded successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
  }
});
