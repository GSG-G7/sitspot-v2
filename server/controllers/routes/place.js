const { upload } = require('../utils');
const { addPlace } = require('../../models/queries');
const { place } = require('../validation');

const post = (req, res, next) => {
  const body = { ...req.body };
  const { name, linkSite, country, city, businessType, img1, img2 } = body;
  place
    .validate({ name, linkSite, country, city, businessType })
    .then(() => {
      const promises = [];
      if (img1) promises.push(upload(img1));
      if (img2) promises.push(upload(img2));
      if (promises.length === 0) {
        const error = Error('IMAGE_IS_REQUIRED');
        error.statusCode = 400;
        throw error;
      }
      return Promise.all(promises);
    })
    .then(arr => {
      const [{ public_id: imgPublicId1 }] = arr;
      const imgPublicId2 = arr.length > 1 ? arr[1].public_id : null;
      body.img1 = imgPublicId1;
      body.img2 = imgPublicId2;
      return body;
    })
    .then(addPlace)
    .then(([{ fields: { id } }]) => res.send(`${id}`))
    .catch(next);
};
module.exports = { post };
