module.exports = {
    app: {
      name: 'SUBZ',
      apiURL: `${process.env.BASE_API_URL}`,
      serverURL: process.env.BASE_SERVER_URL,
      clientURL: process.env.BASE_CLIENT_URL
    },
    port: process.env.PORT || 3000,
    database: {
      url: process.env.MONGO_URI
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      tokenLife: '7d'
    },
    google: {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    facebook: {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL
    }
  };