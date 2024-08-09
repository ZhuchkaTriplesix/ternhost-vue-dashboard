import { faServer, faHeadset, faComputer, faCloud, faEarthAmericas, faKey } from '@fortawesome/free-solid-svg-icons';

const services = {
  title: '6 Rules When Buying a Domain',
  items: [
    {
      id: 0,
      title: 'Registrar',
      text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
      icon: faServer,
    },
    {
      id: 1,
      title: 'Extension',
      text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
      icon: faHeadset,
    },
    {
      id: 2,
      title: 'Availability',
      text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
      icon: faComputer,
    },
    {
      id: 3,
      title: 'SEO Relevance',
      text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
      icon: faCloud,
    },
    {
      id: 4,
      title: 'Long-Term Thinking',
      text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
      icon: faEarthAmericas,
    },
    {
      id: 5,
      title: 'Privacy Protection',
      text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
      icon: faKey,
    },
  ],
};

const faq = [
  {
    id: 0,
    question: 'What Is a Website Builder?',
    answer:
      'An online website builder is a beginner-friendly tool that enables you to make a website quickly and easily. You can create your own online store, business site, blog, or portfolio without any coding, thanks to its drag-and-drop user interface and ready-to-use website templates. \nHostinger Website Builder also includes a custom domain name and built-in marketing tools powered by AI. This way, you can create a professional website without putting too much effort and time – perfect for beginners or business owners that want to get online instantly.',
    isActive: false,
  },
  {
    id: 1,
    question: 'Why Do I Need to Create a Website?',
    answer:
      'Having a well-designed website shows that your brand is legitimate, building trust among potential clients. Plus, a website helps you reach people from all around the world, expanding your audience base. There are many different types of websites, such as online portfolios, personal blogs, business sites, and eCommerce stores, to name a few. No matter your venture, you should build your own website to establish a strong online presence.',
    isActive: false,
  },
  {
    id: 2,
    question: 'How Much Does It Cost for a Website Builder and Hosting Package?',
    answer:
      'Hostinger offers a Website Builder & Web Hosting plan starting at just $2.99/month. With a 30-day money-back guarantee, there is no risk in trying – you can get a refund in case you’re unsatisfied. Besides a website maker, this plan also includes a free custom domain name ($9.99 value) when buying for one year or a longer period.',
    isActive: false,
  },
  {
    id: 3,
    question: 'Is Your Online Website Maker Good for Small Businesses?',
    answer:
      'Absolutely. Since our website maker is easy to use, small business owners can create websites without any technical know-how. Gain access to domain-based email accounts to build trust with your audience and third-party integrations to improve your marketing efforts. And if you want to start selling online, we have plenty of eCommerce tools and search engine optimization features.',
    isAcitve: false,
  },
];

export { services, faq };
