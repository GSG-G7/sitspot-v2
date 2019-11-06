const base = require('../config');

module.exports = () => {
  let allRecords = [];
  const process = (records, fetchNextPage) => {
    allRecords = [...allRecords, ...records.map(record => record.get('Name'))];
    fetchNextPage();
  };
  return base('Keywords')
    .select({ view: 'Grid view' })
    .eachPage(process)
    .then(() => allRecords);
};
