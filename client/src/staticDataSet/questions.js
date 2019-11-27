export default [
  { stepNo: 0, key: 'welcome', question: 'welcome' },
  { stepNo: 1, key: 'name', question: 'name?', type: 'InputQuestion' },
  { stepNo: 2, key: 'link', question: 'link?', type: 'InputQuestion' },
  {
    stepNo: 3,
    key: 'country',
    question: 'something?',
    type: 'CountryOrCity',
    options: { type: 'country' },
  },
  {
    stepNo: 4,
    key: 'city',
    question: 'something?',
    type: 'CountryOrCity',
    options: { type: 'city' },
  },
  { stepNo: 5, key: 'type', question: 'something?', type: 'TypeQuestion' },
];
