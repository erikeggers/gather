import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    createGather: function(){
      this.modelFor('gathers.edit').save().then(function() {
        this.transitionTo('gathers.index');
      }.bind(this));
    }
  }
});
