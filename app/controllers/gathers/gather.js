import Ember from 'ember';

export default Ember.Controller.extend({
  imageStyle: function() {
    return "background: url('" + this.get('model.gatherImage.url') + "') center center no-repeat;";
  }.property('model.gatherImage.url'),

  gatherOwner: function(){
    return (this.session.get('isAuthenticated') && this.session.get('currentUser.id') === this.get('model').createdBy.id);
  }.property('model'),

  gatherJoined: function(){
    var currentUserId = this.session.get('currentUser.id');
    var attendees = this.get('model.attendees');
    return attendees.filterBy('id', currentUserId);
  }.property('model.attendees.@each'),

  actions: {
    destroy: function(){
      this.get('model').destroy().then(function(){
        this.transitionToRoute('gathers.index');
      }.bind(this));
    },

    addAttendee: function(){
      this.get('model').addAttendee(this.get('session.currentUser'));
    },

    removeAttendee: function(){
      this.get('model').removeAttendee(this.get('session.currentUser'));
    },

    addPost: function(){
      var post = this.store.createRecord('post', {
        message: this.get('message'),
        createdBy: this.get('session.currentUser'),
        gather: this.get('model')
      });
      post.save().then(function(){
        this.get('posts').addObject(post);
        this.set('message', null);
      }.bind(this));
    }
  }
});
