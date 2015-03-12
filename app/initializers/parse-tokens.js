import Ember from 'ember';

export function initialize(/* container, application */) {
  Ember.$.ajaxSetup({
    headers: {
      "X-Parse-Application-Id": "cA07TtAmFjB0jetLc7nJIbA385G1OIKjwjxWlk1A",
      "X-Parse-REST-API-Key": "SlwUF66HRTP6B5zjJAk1LegTCN6CrVCXOY0vQf5g"
    }
  });
}

export default {
  name: 'parse-tokens',
  initialize: initialize
};
