import ajax from 'ic-ajax';
import Model from 'ember-magic-man/model';

export default Model.extend({
  attendees: [],

  toJSON: function(){
    var data = this._super();

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
  },

  removeAttendee: function(user){
    var data = {
      "attendees": {
        "__op" : "RemoveRelation",
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
      this.get('attendees').removeObject(user);
    }.bind(this));
  }
});
