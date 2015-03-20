import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({
  attendees: [],

  destroy: function(){
    return this.store.destroy('gather', this);
  },

  save: function(){
    return this.store.save('gather', this);
  },

  toJSON: function(){
    var data = Ember.Object.create(this);

    var userId = this.get('createdBy.id');
    if(userId) {
      data.set('createdBy', {
        __type: 'Pointer',
        className: '_User',
        objectId: userId
      });
    }
    return data;
  },

  addAttendee: function(user){
    var data = {
      "attendees": {
        "__op" : "AddRelation",
        "objects" : [
          {
            "__type" : "Pointer",
            "className" : "_User",
            "objectId" : user.id
          }
        ]
      }
    };
    return ajax({
      url: "https://api.parse.com/1/classes/gatherings/" + this.id,
      type: 'PUT',
      data: JSON.stringify(data)
    }).then(function(response){
      this.set('updatedAt', response.updatedAt);
      this.get('attendees').addObject(user);
    }.bind(this));
  }
});
