import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('gathers', { path: '/' }, function() {
    this.route('login');
    this.route('gather', { path: '/gather/:gather_id' });
    this.route('signup');
    this.route('yourgatherings');
    this.route('attending');
    this.route('create');
    this.route('profile');
    this.route('search', { path: '/search/:term' });
    this.route('edit', { path: '/edit/:gather_id'});
  });
});

export default Router;
