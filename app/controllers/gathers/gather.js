import Ember from 'ember';

export default Ember.Controller.extend({
  imageStyle: function() {
    return "background: url('" + this.get('model.gatherImage.url') + "') center center no-repeat;";
  }.property('model.gatherImage.url'),

  gatherOwner: function(){
    return (this.session.isAuthenticated && this.session.get('objectId') === this.get('model').createdBy.objectId);
  }.property('model'),

  actions: {
    destroy: function(){
      this.get('model').destroy().then(function(){
        this.transitionToRoute('gathers.index');
      }.bind(this));
    },
  }
});
