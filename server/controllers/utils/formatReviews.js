// to update this, take the airtable stuff into csvtojson, and use transpose
// keys = Object.keys(keywords[0])
// temp1 = keys.map(e=>({[e]:{name:keywords[0][e],src:keywords[1][e]}}))
// temp1.reduce((accum, {...rest}) => ({...accum,...rest}), {});

const { keywords } = require('../../models/cached');
// tripDetails: {
//   Type: 'accomdation',
//   'Sub Type': 'private ensuite',
//   'Type of trip': 'Backpacking',
//   Date: '13/9/2018',
//   'Price Range': 'luxury',
// },

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
    rating,
    subtype,
  } = review;
  // extras
  const copy = {
    reviewId: id,
    placeId,
    tripDetails: { subtype, tripType, priceRange, dateOfTrip },
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
    .reduce((accum, [k, v]) => ({ ...accum, [k]: v }), {});
  copy.reviewer.conciousTravellerRating = rating;
  copy.reviewer.listCountries = review.list_countries;

  // images
  copy.images = keys
    .filter(e => e.indexOf('image') !== -1)
    .map(e => review[e][0].url);

  // magical factors
  copy.magicalFactors = keys
    .filter(e => e.split('_')[0] === 'mf')
    .map(e => ({ ...keywords[e], followUp: review[e] }));
  delete copy.magical_factors;

  // preservation factors
  copy.preservationFactors = keys
    .filter(e => e.split('_')[0] === 'pr')
    .map(e => ({ ...keywords[e], followUp: review[e] }));

  return copy;
};

module.exports = format;
