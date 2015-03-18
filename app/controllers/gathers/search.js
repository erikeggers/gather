import Ember from 'ember';

export default Ember.Controller.extend({
  gatherCount: function(){
    return this.get('model.length');
  }.property('model.@each')
});
