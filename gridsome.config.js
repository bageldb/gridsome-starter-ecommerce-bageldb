const collections = require('./collections.json');

module.exports = {
  siteName: 'Headless Beer Shop',
  icon: {
    favicon: './images/favicon.png',
    touchicon: './images/touchicon.png'
  },
  plugins: [
    {
      use: "@bageldb/gridsome-source",
      options: {
        apiToken: process.env.BAGEL_TOKEN, // required
        collections: collections,
      },
    },
    {
      use: "@bageldb/gridsome-pages",
      options: {
        collections: collections,
      },
    },
  ]
}
