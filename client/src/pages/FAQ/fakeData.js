const text = [
  {
    tag: 'p',
    values: [
      'A sitspot is a business (a place to stay, to eat or drink, or to shop) which combines 2 charactristics:',
    ],
  },
];

const subQ1 = [
  {
    tag: 'p',
    values: [
      'A sitspot is a business (a place to stay, to eat or drink, or to shop) which combines 2 charactristics:',

      'It is managed with sustainability at its core, with a conscious effort to minimise the impact on the environment and the local resources, and to support the wellbeing and the economy of the local community.',

      'It radiates a certain atmosphere that fosters connections: either with nature, animals, other guests, local communities, or with yourself.',

      'A sitspot has a certain je ne sais quoi which makes you want to stay or return, and makes you want to share it with like-minded travellers as somewhere truly memorable.',
    ],
  },
];

const questions = [
  {
    title: 'About SitSpot',
    content: [
      { title: 'whats sitspot?', content: subQ1 },
      { title: 'Who can write sitspot recommendations?', content: text },
      { title: 'Which businesses can I recommend?', content: text },
    ],
  },
  {
    title: 'Sustainability',
    content: text,
  },
  {
    title: 'Writting recommendation',
    content: text,
  },
];

export default questions;
