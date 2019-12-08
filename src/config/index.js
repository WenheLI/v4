module.exports = {
  siteTitle: 'Wenhe Eric Li',
  siteDescription: '',
  siteKeywords: 'Wenhe, Eric, Javascript, Machine Learning',
  siteUrl: 'https://portfolio.steins.live',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-136071260-1',
  name: 'Wenhe Li',
  email: 'wenhe.li98@nyu.edu',
  github: 'https://github.com/WenheLi',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/WenheLi',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ericli-646b32129',
    },
    {
      name: 'Blog',
      url: 'https://blog.steins.live/#open',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
