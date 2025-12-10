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
      link: 'https://calendar.google.com/calendar/r',
    },
    {
      id: '5',
      name: 'Drive',
      icon: 'folder',
      link: 'https://drive.google.com/drive/',
    },
    {
      id: '3',
      name: 'Bluesky',
      icon: 'twitter',
      link: 'https://bsky.app/',
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
      link: 'https://theoldreader.com/',
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
        name: 'Pluto',
        link: 'https://pluto.tv/watch/',
      },
      {
        name: 'Spectrum',
        link: 'https://watch.spectrum.net',
      },
    ],
    secondList: [
      {
        name: 'Mastodon',
        link: 'https://social.vivaldi.net/home',
      },
      {
        name: 'Lemmy',
        link: 'https://lemmy.zip',
      },
      {
        name: 'Release',
        link: 'https://www.release.com',
      },
            {
        name: 'GoG',
        link: 'https://gog.com',
      },
    ],
  },
};
