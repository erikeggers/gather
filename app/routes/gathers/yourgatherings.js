import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var userId = this.get('session.currentUser.id');
    return this.store.findQuery('yourgatherings', userId);
  }
});
