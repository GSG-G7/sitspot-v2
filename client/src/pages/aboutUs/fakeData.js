const sitspotMessage = [
  {
    tag: 'p',
    value:
      'For the moment, a passion, a vision, months of research, and a website largely empty and over simplistic.',
  },
  {
    tag: 'p',
    value:
      'But in the near future and thanks to your support, SitSpot will be a truly unique, positive and collaborative platform where conscious travellers can find and recommend magical and sustainable accommodations, restaurants, activities and shops. In a nutshell, SitSpot will be where to find feel-good and sustainable spots which are unique and worth sharing. We call them sitspots. SitSpot’s purpose is to connect like-minded travellers who want to discover the world in ways that preserve its beauty, resources, diversity and the wellbeing of local communities.SitSpot also aims at supporting businesses which are investing in responsible practices and helping raise awareness for sustainable travel.',
  },
  {
    tag: 'p',
    value:
      'At SitSpot, we believe in the power of virtuous and positive businesses to tackle climate change, the most pressing challenge humanity has ever faced. Once our final platform is live, we will play our part and plant a tree for each recommendation we publish.',
  },
  {
    tag: 'p',
    value:
      'We also plan to add more to the site, including a “toolbox” that will allow you to easily track, lower and offset your carbon impact. And a content section featuring inspiring and educational stories showcasing the positive impact of responsible travel.',
  },
  {
    tag: 'p',
    value:
      'Your contribution is essential in making SitSpot the ultimate destination for the community of conscious travel lovers. We can’t wait to have you on board!',
  },
  {
    tag: 'p',
    value:
      'SitSpot will be a truly unique, positive and collaborative platform where conscious travellers can find and recommend magical and sustainable accommodations, restaurants, activities and shops. In a nutshell, SitSpot will be where to find feel-good and sustainable spots which are worth sharing.',
  },
  {
    tag: 'p',
    value:
      'SitSpot’s purpose is to connect like-minded travellers who want to discover the world in ways that preserve its beauty, resources, diversity and the wellbeing of local communities.SitSpot also aims at supporting businesses which are investing in responsible practices and helping raise awareness for sustainable travel.',
  },
];

const questions = [
  {
    title: 'What is SitSpot',
    content: sitspotMessage,
  },
  {
    title: 'Why do we exist?',
    content: [
      {
        tag: 'p',
        value:
          'SitSpot’s purpose is to connect like-minded travellers who want to discover the world in ways that preserve its beauty, resources, diversity and the wellbeing of local communities.SitSpot also aims at supporting businesses which are investing in responsible practices and helping raise awareness for sustainable travel.',
      },
      {
        tag: 'p',
        value:
          'This is where the idea for SitSpot came from. We want SitSpot to be the platform where you can recommend and find sustainable and unique businesses worth sharing. This is what makes SitSpot different.',
      },
    ],
  },
  {
    title: 'Our values',
    content: [
      {
        tag: 'p',
        value:
          'Our mission is to inspire and help the travellers of tomorrow.We aspire to support and encourage conscious travel to become the new norm.We believe in a world where travel is meant for making connections, discovering the wonders of the world and protecting its diversity.',
      },
      {
        tag: 'p',
        value: 'Our values:',
      },
      {
        tag: 'li',
        parent: 'ul',
        value: [
          'positivity',
          'respect',
          'tolerance',
          'trust',
          'authenticity',
          'collaboration',
          'care',
        ],
      },
    ],
  },
  {
    title: '1 recommendation = 1 tree',
    content: [
      {
        tag: 'p',
        value:
          'At SitSpot, we believe in the power of virtuous and positive businesses to tackle climate change, the most pressing challenge humanity has ever faced. Once our final platform is live, we will play our part and plant a tree for each recommendation we publish.',
      },
      {
        tag: 'p',
        value:
          'You don’t even need to get your hands dirty! We offer a no mess way to plant a tree through the partnership with specialist organisations which will do it for you as part of reforestation programmes.',
      },
      {
        tag: 'p',
        value:
          'Reforestation is not the magical solution to climate change but it is one of the most efficient approach if managed in a responsible way.',
      },
      {
        tag: 'p',
        value: 'Here is what trees do for us and for Planet Earth:',
      },
      {
        tag: 'li',
        parent: 'ul',
        value: [
          'They provide us with free purified air by absorbing CO2 from the atmosphere',
          'They help fight climate change and encourage water storage',
          'They make our landscapes green and beautiful. A walk in the forest is scientifically proven to boost our wellbeing!',
          'Trees encourage wildlife, by providing food and shelter for thousands of species.',
        ],
      },
      {
        tag: 'p',
        value: 'So get sharing!',
      },
    ],
  },
  {
    title: 'Meet the founder',
    content: [
      {
        tag: 'img',
        value: 'src image',
      },
      {
        tag: 'p',
        value:
          'A year ago, I was enjoying the perks of a comfortable job in a big international media company. But despite the generous pension scheme, the epic Christmas parties and the friendliest team that bake you cakes on your birthday, … I knew',
      },
      {
        tag: 'p',
        value:
          'If you had told me a year ago that I’d be running my own start-up, I would have burst out laughing.',
      },
      {
        tag: 'li',
        parent: 'ul',
        value: [
          'I have been a passionate environmentalist for years, cleaning rivers etc….',
          'For many years, I was trying to fit that in alongside my job at a big international media company.',
          'And one day I took the plunge: I said goodbye to the perks of a comfortable and rewarding creative job, the generous pension scheme, the epic Christmas parties and the friendliest team that bake you cakes on your birthday.',
          'And I attempted to set up my own company. I knew that the world of conscious travel was what boosted me the most, and was massively under exploited. But I wasn’t sure which form that would take, I had never built a business plan, the startip world sounded like some sort of foreign land, and',
          'A couple of start-ups accelerators programmes later, I have interviewed hundreds of travellers and businesses sharing the same passion.',
        ],
      },
    ],
  },
  {
    title: 'Contact',
    content: [
      {
        tag: 'p',
        child: [{ tag: 'span', value: 'reviews@mysitspot.com' }],
        value:
          'Your feedback matters to us as we are building SitSpot. Contact us at',
      },
    ],
  },
];

export default questions;
