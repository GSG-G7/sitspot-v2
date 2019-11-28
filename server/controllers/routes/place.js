const { upload } = require('../utils');
const { addPlace } = require('../../models/queries');
const { place } = require('../validation');

const post = (req, res, next) => {
  const body = { ...req.body };
  const { name, link, country, city, type, img1 } = body;
  place
    .validate({ name, link, country, city, type })
    .then(() => {
      if (img1) return upload(img1);

      return Promise.resolve('NO_IMAGE');
    })
    .then(image => {
      if (image !== 'NO_IMAGE') {
        const { secure_url: url } = image;
        // 'mmmmm.asdj.com/asdlkasdlakd/upload/image/"vXXXXXXXX/public_id".ext' extracts this "vXXXXXXXX/public_id"
        // eslint-disable-next-line prefer-destructuring
        body.img1 = url.split('/image/upload/')[1].split('.')[0];
      }
      return body;
    })
    .then(addPlace)
    .then(([{ fields: { id } }]) => res.send(`${id}`))
    .catch(next);
};

module.exports = { post };
