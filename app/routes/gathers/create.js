import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.createRecord('gather');
  },

  actions: {
    createGather: function(){
      var _this = this;
      console.log(this.modelFor('create'));
      this.store.save('gather', this.modelFor('gathers.create')).then(function(){
        _this.transitionTo('gathers.index');
      });
    }
  }
});
