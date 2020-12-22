const collections = require('./collections.json');

module.exports = {
  metaInfo(){
    return {
      siteName: 'Headless Beer Shop',
      ...this.$ogp({
        title: 'Ecommerce Starter',
        description: 'BagelDB implementation of ecommerce on Gridsome',
        image: '/images/cover.jpg',
      })
    }
  },
  icon: {
    favicon: '/images/favicon.png',
    touchicon: '/images/touchicon.png'
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
