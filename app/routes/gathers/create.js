import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {};
  },

  actions: {
    createGather: function(){
      var _this = this;
      this.store.save('gather', this.modelFor('create')).then(function(){
        _this.transitionTo('gathers.index');
      });
    }
  }
});
