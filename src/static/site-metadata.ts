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
  siteTitle: 'XHH 的运动记录',
  siteUrl: 'https://sports.xhh.im',
  logo: 'https://img.181024.xyz/file/1747232627311_favicon-192x192.png',
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
