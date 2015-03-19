import Ember from 'ember';

export default Ember.Controller.extend({
  imageStyle: function() {
    return "background: url('" + this.get('model.gatherImage.url') + "') center center no-repeat;";
  }.property('model.gatherImage.url'),

  gatherOwner: function(){
    return (this.session.get('isAuthenticated') && this.session.get('currentUser.id') === this.get('model').createdBy.id);
  }.property('model'),

  actions: {
    destroy: function(){
      this.get('model').destroy().then(function(){
        this.transitionToRoute('gathers.index');
      }.bind(this));
    },
  }
});
