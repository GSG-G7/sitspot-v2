export default [
  {
    key: 'welcome',
    required: false,
    question:
      'Thank you for sharing your “sitspot”. You’re on your way to support a deserving tourism business and enlighten other conscious travelers like you. Our simple questionnaire will take 15 minutes at most to complete, and will prompt you to share the details that your fellow conscious travelers will find most helpful.',
  },
  {
    key: 'name',
    required: true,
    question: 'What is the name of the business?',
    type: 'InputQuestion',
  },
  {
    key: 'link',
    required: false,
    question:
      'If it’s easy enough for you, please indicate their website address. This will help us ensure we list the correct establishment.',
    type: 'InputQuestion',
  },
  {
    key: 'country',
    required: true,
    question: 'In which country is this buisness located?',
    type: 'CountryOrCity',
    options: { type: 'country' },
  },
  {
    key: 'city',
    required: true,
    question: 'What is the nearest city?',
    type: 'CountryOrCity',
    options: { type: 'city' },
  },
  {
    key: 'type',
    required: true,
    question: 'What type of business is it?',
    type: 'TypeQuestion',
  },
];
