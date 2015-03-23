import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    return new Ember.RSVP.hash({
      gather: this.store.find('gather', params.gather_id),
      posts: this.store.findAll('post'),
    });
  },

  setupController: function(controller, model) {
    controller.set('model', model.gather);
    controller.set('posts', model.posts);
  }
});
  
