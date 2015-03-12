import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('gathers', { path: '/' }, function() {
    this.route('login');
    this.route('gather');
    this.route('signup');
    this.route('yourgatherings');
    this.route('create');
  });
});

export default Router;
