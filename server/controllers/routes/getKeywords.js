const { selectKeywords } = require('../../models/queries');

module.exports = (req, res, next) => {
  res.json(selectKeywords);
  next();

  // selectKeywords()
  //   .then(records =>
  // {
  // if (!records || records.length === 0)
  // throw { statusCode: 404, message: 'There are no keywords!' };
  //     return records
  //       .map(record => ({
  //         name: record.get('Name'),
  //         imageUrl: record.get('Image_Link'),
  //       }))
  //       .filter(e => !!e.name && !!e.imageUrl)
  //   })
  //   .then(data => res.json({ data }))
  //   .catch(next);
};
