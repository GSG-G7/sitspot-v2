const sub1First = [
  {
    tag: 'p',
    values: [
      'A sitspot is a business (a place to stay, to eat or drink, or to shop) which combines two characteristics:',
    ],
  },
  {
    tag: 'li',
    parent: 'ul',
    values: [
      'It is managed with sustainability at its core, with a conscious effort to minimise the impact on the environment and the local resources, and to support the wellbeing and the economy of the local community.',
      'It radiates a certain atmosphere that fosters connections: either with nature, animals, other guests, local communities, or with yourself.',
    ],
  },
  {
    tag: 'p',
    values: [
      'A sitspot has a certain “je ne sais quoi” which makes you want to stay or return, and makes you want to share it with like-minded travellers as somewhere truly memorable.',
    ],
  },
];

const sub1Second = [
  {
    tag: 'p',
    values: [
      'We are currently focusing on three types. They can be local to you, or on another continent.',
    ],
  },
  {
    tag: 'li',
    parent: 'ul',
    values: [
      'Accommodations, and this includes hotels (preferably small and family owned), rentals, guesthouses, B&B, eco-lodges, farmhouses, campsites, woofing and hostels.',
      'Restaurants, bars and cafés.',
      'Shops',
    ],
  },
];

const questions = [
  {
    title: 'Knowing which businesses to recommend',
    content: [
      { title: 'what is sitspot?', content: sub1First },
      {
        title: 'Which types of business can I recommend?',
        content: sub1Second,
      },
    ],
  },
  {
    title: 'Reasons for recommending a business',
    content: [
      {
        title:
          'I am not sure about sharing my sitspot, as I would not like it to lose its soul and suffer from over-tourism.',
        content: [
          {
            tag: 'p',
            values: [
              'Your sitspot needs ongoing trading to thrive. If you truly love it, share it! The beauty of SitSpot is that it allows you to share your secret with a community of travellers who care for the same ethical and environmental values.',
            ],
          },
        ],
      },
      {
        title:
          'I stayed in a place which has the worst sustainability practices. Can I write a negative review?',
        content: [
          {
            tag: 'p',
            values: [
              'This is not what SitSpot is about. We don’t aspire to list and review all businesses as most review platforms do. SitSpot is about giving kudos and recognising businesses which are on their path to be sustainable and deserve awareness and recognition for their efforts. We also hope that this will inspire other tourism providers and get them on their journey towards sustainability. Our questionnaire also allows you to make suggestions for improvement, as sustainability is a journey, not an achievement.',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Sustainability criteria',
    content: [
      {
        title:
          'Which sustainability criteria does the business need to have to be recommended on SitSpot?',
        content: [
          {
            tag: 'p',
            values: [
              'We have designed a simple questionnaire to guide your recommendation. You will be asked whether you have observed certain practices which demonstrate sustainability efforts such as:',
            ],
          },
          {
            tag: 'li',
            parent: 'ul',
            values: [
              'preserving resources',
              'reducing and recycling waste',
              'lowering food impact',
              'promoting low-impact transport',
              'supporting local economy',
              'sourcing products responsibly',
            ],
          },
        ],
      },
      {
        title:
          'The accommodation I just stayed at offers paper straws at the bar. Shall I recommend them for their sustainability practices?',
        content: [
          {
            tag: 'p',
            child: { tag: 'span', value: 'reviews@mysitspot.com' },
            values: [
              'Well, it depends. Recommendations should recognise businesses which understand their impact and act to lower it; businesses which demonstrate sustainability efforts in the daily running of their operations, which engage their guests in their mission and champion a conscious travel culture.Geographical, economic and cultural aspects should be taken in consideration. If the accommodation where you stayed is in a big city such as London, Paris or Berlin where plastic straws are now pretty much a vilified object of the past, and if the establishment doesn’t particularly distinguish itself with any other sustainability achievements, then we advise not to bother. But if you went to a bar in Luang Namtha, Laos, where they offered you a paper straw with your sugar cane juice but did not offer water in plastic bottles and rather had a water refill station, then it might be worth giving them a thumbs up. Responsible tourism isn’t just a measure of plastic consumption and CO2 emissions. It is also about how businesses foster a culture that facilitates a meaningful and responsible connection with wildlife and local communities.There’s no hard and fast rule and the recommendation questionnaire will let you flag what you were sure or unsure of and provide the details you deem relevant. If you have any doubt, feel free to contact us at',
              'before writing your recommendations',
            ],
          },
        ],
      },
      {
        title:
          'The business I would like to recommend does not have any certification. Does that mean that it is not sustainable and I should not recommend it?',
        content: [
          {
            tag: 'p',
            values: [
              'No. Sustainability certifications play an important role in driving the industry’s standards and our questionnaire allows you to indicate if your sitspot has obtained one. However, many businesses which display a good sustainability track record aren’t certified, because committing to a certification procedure is an investment in time and money. We want to give those businesses a chance to get another form of accolade: yours!',
            ],
          },
        ],
      },
      {
        title:
          'I have stayed in an accommodation which ticked many sustainability boxes. Shall I recommend it on SitSpot?',
        content: [
          {
            tag: 'p',
            values: [
              'Not necessarily. What makes SitSpot unique is its ambition to list businesses that not only follow some steps to minimise their impact on the environment, but also radiate a certain vibe which made your stay truly unique. There are establishments which follow strict sustainability guidelines, but they can be tall ugly buildings with no soul or personality, big franchises with no authenticity and human touch. They don’t really belong on SitSpot. A sitspot is a place which facilitates connections, be it with yourself, with nature and wildlife, with other guests, with the staff, or the local community. Preferably all of the above. We trust you to know when it feels right.',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Process of adding a recommendation',
    content: [
      {
        title: 'Who can write sitspot recommendations?',
        content: [
          {
            tag: 'p',
            values: [
              'We have designed a simple questionnaire to guide your recommendation. You will be asked whether you have observed certain practices which demonstrate sustainability efforts such as:',

              'Any adult (18+) who came across a sitspot worth sharing. Writing a recommendation is a good way to raise awareness and reward businesses for the way they embrace SitSpot’s values and demonstrate social and environmental responsibility. You don’t need a PHD in environmental science and don’t have to be a certified sustainability auditor! All you need is a responsible mindset, a passion for encouraging sustainable practices, and a keen eye for some simple details. Above all, it’s about the willingness for like-minded travellers to know about your sitspots, your unique sustainable places worth sharing.',
            ],
          },
        ],
      },
      {
        title:
          'My friend told me about this amazing place she stayed at. Can I write the recommendation for her?',
        content: [
          {
            tag: 'p',
            values: [
              'Integrity and accuracy of the recommendations matter to us and to your fellow travellers, so we only allow recommendations of places you have experienced yourself.',
            ],
          },
        ],
      },
      {
        title: 'How do I recommend a place?',
        content: [
          {
            tag: 'li',
            parent: 'ul',
            values: [
              'Click the button “Add a recommendation” from the home page or the menu.',
              'Enter the details in steps 1-7 so we can identify your sitspot.',
              'Fill in a short profile form. You only need to fill it in once, when you complete your first recommendation.',
              'Fill in some basic info, tick the sustainability practices that you have observed and the types of good vibes that you have experienced, write a short overall review, upload a few pictures if you can… et voila!',
              'Answer as many criteria as you can. The richness of your comments will make the strength of the recommendation. But If the question is not relevant or you don’t feel best placed to comment, e.g. if you haven’t paid attention to that particular criteria, if there’s no way for you to find out, or if you’re not sure, just skip it.',
              'We will thoroughly assess your recommendation before sharing it.',
            ],
          },
        ],
      },
      {
        title:
          'How can I edit or delete my recommendation once it is submitted?',
        content: [
          {
            tag: 'p',
            child: { tag: 'span', value: 'reviews@mysitspot.com' },
            values: [
              'Please contact',
              'if you wish to do so. You will be able to have direct access to your recommendations in the future version of our site.',
            ],
          },
        ],
      },
      {
        title: 'Why do I need to create a profile?',
        content: [
          {
            tag: 'p',
            values: [
              'SitSpot is a community platform which aims to connect travellers who share the same passion for authentic and responsible travel. Its value lies in the trust we have in each other and in our ability to appreciate sustainability efforts. You have told us how difficult it is to find reliable reviews that are relevant to you. This is what we want to give you. Telling us a little bit about you will help like-minded travellers value your recommendation and share theirs with you too. In this beta version of the site, we will not ask you for any of your personal identifiable data. Please do refrain from sharing any information in your recommendation that could help identify you such as name, email, phone number, address etc...',

              'This will evolve as we further develop the platform and when we are fully set up to protect your data, we will let you upload pictures and provide your name to help make your profile more personal.',
            ],
          },
        ],
      },
      {
        title:
          'Why do recommendations go through a validation process before they get published?',
        content: [
          {
            tag: 'p',
            values: [
              'What makes SitSpot’s strength is the richness and the quality of our users’ recommendations. This is why we thoroughly read and assess all recommendations that get submitted, to check that essential information such as location and URL have been entered. We also want to ensure that they provide qualitative, relevant information that will serve the community. Lastly, we want to make sure that recommendations are aligned to SitSpot values: positivity, respect, tolerance and collaboration.',
            ],
          },
        ],
      },
      {
        title: 'Some legal information:',
        content: [
          {
            tag: 'p',
            values: [
              'By submitting a recommendation to SitSpot, you agree to the following terms and conditions:',
            ],
          },
          {
            tag: 'li',
            parent: 'ul',
            values: [
              'By submitting a recommendation, you agree to grant SitSpot the licence to publish it on all SitSpot’s media channels, including SitSpot’s website, social channels, and newsletters. This licence is valid for perpetuity.',
              'Please ensure that the pictures you are submitting don’t feature anyone but yourself – e.g. another guest or the host, unless you have obtained permission from them to publish their picture.',
              'Please ensure that the pictures don’t feature children under 18 years old.',
              'A recommendation cannot be taken down by the contributor once it is live on SitSpot but may be removed if it has been agreed between us and the contributor.',
              'SitSpot is not responsible for the views of anyone contributing on SitSpot. The views are the contributors’ own.',
              'Before submitting a recommendation, contributors will be asked to certify that their review is based on their own experience, that it is their genuine opinion, that they have no personal or business relationship with the establishment they want to recommend, and have not been offered any incentive or payment from the establishment to write the recommendation. SitSpot has a zero-tolerance policy about fake reviews.',
              'Contributors must confirm that they agree to the above T&Cs by ticking “I accept” at the end of the form',
            ],
          },
        ],
      },
    ],
  },
];

export default questions;
