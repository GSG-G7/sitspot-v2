// to update this, take the airtable stuff into csvtojson, and use transpose
// keys = Object.keys(keywords[0])
// temp1 = keys.map(e=>({[e]:{name:keywords[0][e],src:keywords[1][e]}}))
// temp1.reduce((accum, {...rest}) => ({...accum,...rest}), {});

const { keywords } = require('../../models/cached');

const splitAndTitleCase = (text, seperator) =>
  text
    .split(seperator)
    .map(e => e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase())
    .slice(1)
    .join(' ');
const format = review => {
  const {
    id,
    place_id: placeId,
    full_review: fullReview,
    review_title: reviewTitle,
    experience_field: experienceFields,
    eco_certificates: ecoCertificates,
    date_of_trip: dateOfTrip,
    trip_type: tripType,
    price_range: priceRange,
    subtype,
  } = review;
  // extras
  const copy = {
    reviewId: id,
    placeId,
    tripDetails: {
      'Type of service': subtype,
      'Trip type': tripType,
      'Price range': priceRange,
      'Date of trip': dateOfTrip,
    },
    fullReview,
    reviewTitle,
    experienceFields,
    ecoCertificates,
  };

  const keys = Object.keys(review);

  // reviewer info
  copy.reviewer = keys
    .filter(e => e.split('_')[0] === 'reviewer')
    .map(e => [e, review[e]])
    .reduce(
      (accum, [k, v]) => ({ ...accum, [splitAndTitleCase(k, '_')]: v }),
      {}
    );

  // images
  copy.images = keys
    .filter(e => e.indexOf('image') !== -1)
    .map(e => review[e][0].url);

  // magical factors
  copy.magicalFactors = keys
    .filter(e => {
      const key = e.split('_')[0];
      return key === 'mf' || key === 'bc';
    })
    .map(e => ({ ...keywords[e], followUp: review[e] }));

  // preservation factors
  copy.preservationFactors = keys
    .filter(e => e.split('_')[0] === 'pr')
    .map(e => ({ ...keywords[e], followUp: review[e] }));

  return copy;
};

module.exports = format;
