require('dotenv').config();

/**
 * Proxy configuration for local development. Assumes that there exists a set of Mockaroo mock API
 * endpoints ready for use. Requires the environment variable API_KEY to be set.
 *
 */
const PROXY_CONFIG = {
    "/api": {
        target: "https://my.api.mockaroo.com",
        logLevel: "info",
        secure: false,
        changeOrigin: true,
        bypass: function (req) {
            if (req.headers.accept.indexOf("html") !== -1) {
                console.log("Skipping proxy for browser request.");
                return "/index.html";
            }
            req.headers["X-API-Key"] = process.env.API_KEY;
        }
    }
  }

  module.exports = PROXY_CONFIG;
