import Ember from 'ember';

export default Ember.Controller.extend({
  gatherCount: Ember.computed.alias('model.length')
});
