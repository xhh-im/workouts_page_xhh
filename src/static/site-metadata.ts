interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'XHH 运动记录',
  siteUrl: 'https://sports.xhh.im/',
  logo: 'https://files-hosting.827373.xyz/favicon-512x512.png',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: '📝 Blog',
      url: 'https://blog.xhh.im',
    },
    {
      name: '⭐ About',
      url: 'https://xhh.im',
    },
  ],
};

export default data;
