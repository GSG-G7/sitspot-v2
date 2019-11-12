const { search } = require('../../models/queries');

const imgUrl = publicId =>
  `https://res.cloudinary.com/amoodaa/image/upload/v1573596346/${publicId}.png`;

module.exports = (req, res, next) =>
  search(req.query)
    .then(result =>
      result.map(({ id, fields: { image1, image2, ...fields } }) => ({
        id,
        image1: imgUrl(image1),
        image2: imgUrl(image2),
        ...fields,
      }))
    )
    .then(result => res.json(result))
    .catch(next);
