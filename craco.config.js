const path = require("path");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          assert: require.resolve("assert/"),
          // stream: require.resolve("stream-browserify"),
          // util: require.resolve("util/"),
          // crypto: require.resolve("crypto-browserify"),
          // url: require.resolve("url/"),
        },
      },
    },
  },
};
