export default [
  {
    stepNo: 0,
    key: 'welcome',
    question:
      'Thank you for sharing your “sitspot”. You’re on your way to support a deserving tourism business and enlighten other conscious travelers like you. Our simple questionnaire will take 15 minutes at most to complete, and will prompt you to share the details that your fellow conscious travelers will find most helpful.',
  },
  {
    stepNo: 1,
    key: 'name',
    question: 'What is the name of the business?',
    type: 'InputQuestion',
  },
  {
    stepNo: 2,
    key: 'link',
    question:
      'If it’s easy enough for you, please indicate their website address. This will help us ensure we list the correct establishment.',
    type: 'InputQuestion',
  },
  {
    stepNo: 3,
    key: 'country',
    question: 'In which country is this buisness located?',
    type: 'CountryOrCity',
    options: { type: 'country' },
  },
  {
    stepNo: 4,
    key: 'city',
    question: 'What is the nearest city?',
    type: 'CountryOrCity',
    options: { type: 'city' },
  },
  {
    stepNo: 5,
    key: 'type',
    question: 'What type of business is it?',
    type: 'TypeQuestion',
  },
];
