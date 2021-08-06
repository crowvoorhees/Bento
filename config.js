// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: '',
  imageBackground: false,
  openInNewTab: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon!',
  greetingEvening: 'Good evening!',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: 'd27048c0198f34c4430ff7802756f090',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F',
  weatherLatitude: '28.538336',
  weatherLongitude: '-81.379234',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '2',
      name: 'Calendar',
      icon: 'calendar',
      link: 'http://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Keep',
      icon: 'list',
      link: 'https://keep.google.com/',
    },
    {
      id: '3',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://tweetdeck.twitter.com',
    },
    {
      id: '4',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://www.reddit.com/',
    },
    {
      id: '6',
      name: 'The Old Reader',
      icon: 'rss',
      link: 'http://theoldreader.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'airplay',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'YouTube',
        link: 'https://www.youtube.com',
      },
      {
        name: 'Twitch',
        link: 'https://www.twitch.tv/directory',
      },
      {
        name: 'Spotify',
        link: 'https://play.spotify.com/browse',
      },
      {
        name: 'Discord',
        link: 'https://discordapp.com/',
      },
    ],
    secondList: [
      {
        name: 'News',
        link: 'https://news.google.com/',
      },
      {
        name: 'Hacker',
        link: 'https://news.ycombinator.com/news',
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/',
      },
      {
        name: 'Mastodon',
        link: 'https://fosstodon.org/',
      },
    ],
  },
};
