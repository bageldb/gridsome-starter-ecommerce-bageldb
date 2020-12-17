// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const collections = require('./collections.json');

module.exports = {
  siteName: 'Headless Beer Shop',
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
