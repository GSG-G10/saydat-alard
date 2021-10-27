require('env2')('.env');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function uploadToCloudinary(file) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file, (err, url) => {
      if (err) return reject(err);
      return resolve(url);
    });
  });
}

module.exports = { cloudinary, uploadToCloudinary };
