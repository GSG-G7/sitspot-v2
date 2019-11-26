module.exports = publicId =>
  `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/upload/v1573596346/${publicId}.png`;
