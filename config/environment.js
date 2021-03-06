/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'gather',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    'simple-auth': {
      authenticationRoute: 'gathers.login',
      routeAfterAuthentication: 'gathers.index',
      authorizer: 'authorizer:parse',
      crossOriginWhitelist: ['https://api.parse.com']
    },

    parseKeys: {
      applicationId: "cA07TtAmFjB0jetLc7nJIbA385G1OIKjwjxWlk1A",
      restApi: "SlwUF66HRTP6B5zjJAk1LegTCN6CrVCXOY0vQf5g"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' *",
      'connect-src': "'self' https://api.parse.com",
      'img-src': "'self' *",
      'style-src': "'self' 'unsafe-inline' *",
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/gather/';
  }

  return ENV;
};
