const { selectKeywords } = require('../models/queries');

module.exports = (req, res, next) => {
  selectKeywords()
    .then(records =>
      records
        .map(record => {
          return {
            name: record.get('Name'),
            imageUrl: record.get('Image_Link'),
          };
        })
        .filter(e => {
          return e.name !== undefined && e.imageUrl !== undefined;
        })
    )
    .then(data => res.json({ data }))
    .catch(next);
};
