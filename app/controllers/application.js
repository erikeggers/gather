import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search: function(){
      var term = this.get('searchValue');
      this.transitionToRoute('gathers.search', term);
      this.set('searchValue', null);
    }
  }
});
