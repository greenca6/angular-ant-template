require('dotenv').config();

/**
 * Proxy configuration for local development. Assumes that there exists a set of Mockaroo mock API
 * endpoints ready for use. Requires the environment variable API_KEY to be set.
 *
 */
const PROXY_CONFIG = {
  "/api": {
      target: process.env.API_URL,
      logLevel: "info",
      secure: false,
      changeOrigin: true,
      onProxyReq: function(req) {
        req.setHeader('X-API-KEY', process.env.API_KEY);
      },
  }
};

module.exports = PROXY_CONFIG;
