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

      var message = this.get("message");
      var createdBy = this.session.get('currentUser.id');
      var gatherId = this.get('model.id');

      var data = {
        
        "createdBy" :
        {
          "__type" : "Pointer",
          "className" : "_User",
          "objectId" : createdBy
        },

        "gather" :
        {
          "__type" : "Pointer",
          "className" : "gatherings",
          "objectId" : gatherId
        },

        "message" : message

      };
      var post = this.store.createRecord('post', data);
      post.save().then(function(){
        // this.get('posts').addObject(post);
      }.bind(this));
    }
  }
});
