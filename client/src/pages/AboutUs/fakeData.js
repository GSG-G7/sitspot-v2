import recommendImg from '../../assets/about-img-1.png';
import founderImg from '../../assets/founder.JPG';

const sitspotMessage = [
  {
    tag: 'p',
    values: [
      'For the moment, a passion, a vision, months of research, and a website largely empty and over simplistic.',

      'But in the near future and thanks to your support, SitSpot will be a truly unique, positive and collaborative platform where conscious travellers can find and recommend magical and sustainable accommodations, restaurants, activities and shops. In a nutshell, SitSpot will be where to find feel-good and sustainable spots which are unique and worth sharing. We call them sitspots. SitSpot’s purpose is to connect like-minded travellers who want to discover the world in ways that preserve its beauty, resources, diversity and the wellbeing of local communities.SitSpot also aims at supporting businesses which are investing in responsible practices and helping raise awareness for sustainable travel.',

      'At SitSpot, we believe in the power of virtuous and positive businesses to tackle climate change, the most pressing challenge humanity has ever faced. Once our final platform is live, we will play our part and plant a tree for each recommendation we publish.',

      'We also plan to add more to the site, including a “toolbox” that will allow you to easily track, lower and offset your carbon impact. And a content section featuring inspiring and educational stories showcasing the positive impact of responsible travel.',
      'Your contribution is essential in making SitSpot the ultimate destination for the community of conscious travel lovers. We can’t wait to have you on board!',

      'SitSpot will be a truly unique, positive and collaborative platform where conscious travellers can find and recommend magical and sustainable accommodations, restaurants, activities and shops. In a nutshell, SitSpot will be where to find feel-good and sustainable spots which are worth sharing.',

      'SitSpot’s purpose is to connect like-minded travellers who want to discover the world in ways that preserve its beauty, resources, diversity and the wellbeing of local communities.SitSpot also aims at supporting businesses which are investing in responsible practices and helping raise awareness for sustainable travel.',
    ],
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
        values: [
          'We noticed a booming trend in people wanting to plan their travel in a way that aligns with their moral and environmental values. We spent months sounding out conscious travellers like you to understand your needs. We heard your interest in finding and supporting businesses which are investing in sustainability, as well as making your experience truly memorable. Places with a special vibe which do good and feel good.',

          'But we also found that so many of you shared our frustration of lacking a reliable source of inspiration, information and tools. We all agree that making the right choices when planning a trip should be made simpler.',

          'This is where the idea for SitSpot came from. We want SitSpot to be the platform where you can easily find and recommend sustainable and authentic travel businesses worth sharing. This is what makes SitSpot different.',
        ],
      },
    ],
  },
  {
    title: 'Our values',
    content: [
      {
        tag: 'p',
        values: [
          'Our mission is to inspire and help the travellers of tomorrow.We aspire to support and encourage conscious travel to become the new norm.We believe in a world where travel is meant for making connections, discovering the wonders of the world and protecting its diversity.',

          'Our values:',
        ],
      },
      {
        tag: 'li',
        parent: 'ul',
        values: [
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
        tag: 'img',
        value: recommendImg,
      },
      {
        tag: 'p',
        values: [
          'At SitSpot, we believe in the power of virtuous and positive businesses to tackle climate change, the most pressing challenge humanity has ever faced. Once our final platform is live, we will play our part and plant a tree for each recommendation we publish.',

          'You don’t even need to get your hands dirty! We offer a no mess way to plant a tree through the partnership with specialist organisations which will do it for you as part of reforestation programmes.',

          'Reforestation is not the magical solution to climate change but it is one of the most efficient approach if managed in a responsible way.',

          'Here is what trees do for us and for Planet Earth:',
        ],
      },
      {
        tag: 'li',
        parent: 'ul',
        values: [
          'They provide us with free purified air by absorbing CO2 from the atmosphere',
          'They help fight climate change and encourage water storage',
          'They make our landscapes green and beautiful. A walk in the forest is scientifically proven to boost our wellbeing!',
          'Trees encourage wildlife, by providing food and shelter for thousands of species.',
        ],
      },
      {
        tag: 'p',
        values: ['So get sharing!'],
      },
    ],
  },
  {
    title: 'Meet the founder',
    content: [
      {
        tag: 'img',
        value: founderImg,
      },
      {
        tag: 'h3',
        values: ['Katia Hérault, founder of SitSpot'],
      },
      {
        tag: 'p',
        values: [
          'I can vividly remember my environmental awakening. In 2011 I read a book called “Eating Animals” by Jonathan Safran Foers, and realised the extent of the suffering our species is inflicting on all the others. I admitted the state of cognitive dissonance I had been operating under, and became vegetarian the minute I turned the last page. I then rapidly grasped the notion that we live in a miraculous but fragile ecosystem in which all life forms co-evolve. And I and became an eco-nut from then on. I have been avidly reading climate change research, gradually eliminating disposables at home, volunteering to pick up and monitor trash from the Thames, founding a Green group at work and setting up a sustainability strategy at my kids’ school.',

          'For many years, I have been trying to fit that in alongside my job in a big international media company. And in 2019 I took the plunge: I said goodbye to the perks of a comfortable and rewarding creative job, the generous pension scheme, the epic Christmas parties and to the friendliest team who bake you cakes on your birthday.',

          'I knew that the world of conscious travel was what boosted me the most and under-served. I now had to identify a clear and unique business proposition.',

          'A couple of start-ups accelerator programmes later, I have interviewed hundreds of travellers and businesses sharing the same passion. I am more motivated than ever to develop the best possible platform for the growing community of conscious travellers and contribute to making tourism a force of positive transformation in the world.',
        ],
      },
    ],
  },
  {
    title: 'Contact',
    content: [
      {
        tag: 'p',
        child: { tag: 'span', value: 'reviews@mysitspot.com' },
        value:
          'Your feedback matters to us as we are building SitSpot. Contact us at',
      },
    ],
  },
];

export default questions;
