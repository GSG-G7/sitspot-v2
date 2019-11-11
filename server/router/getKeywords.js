const { selectKeywords } = require('../models/queries');

module.exports = (req, res, next) => {
  selectKeywords()
    .then(records =>
      records
        .map(record => ({
          name: record.get('Name'),
          imageUrl: record.get('Image_Link'),
        }))
        .filter(e => !e.name && !e.imageUrl)
    )
    .then(data => res.json({ data }))
    .catch(next);
};
