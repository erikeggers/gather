import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({
  find: function(name, id){
    /* jshint unused: false */
    var gather;
    return ajax("https://api.parse.com/1/classes/gatherings/" + id + "?include=createdBy").then(function(response){
      gather = response;
      gather.id = gather.objectId;
      delete gather.objectId;
      gather.createdBy.id = gather.createdBy.objectId;
      delete gather.createdBy.objectId;
      return ajax("https://api.parse.com/1/users/", {
        type: "GET",
        data: {
          where: JSON.stringify({
            "$relatedTo":{
              "object":{
                "__type":"Pointer",
                "className":"gatherings",
                "objectId": id
              },
              "key":"attendees"
            }
          })
        }
      });
    }).then(function(response){
      gather.attendees = response.results.map(function(attendee) {
       attendee.id = attendee.objectId;
       return attendee;
      });
      return gather;
    });
  },

  findAll: function(name) {
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/gatherings" + "?include=createdBy").then(function(response){
      return response.results.map(function(gather) {
        gather.id = gather.objectId;
        delete gather.objectId;
        gather.createdBy.id = gather.createdBy.objectId;
        delete gather.createdBy.objectId;
        return gather;
      });
    });
  },

  findQuery: function(name, searchTerm) {
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/functions/search", {
      type: "POST",
      data: JSON.stringify({search: searchTerm})
    }).then(function(response){
        return response.result;
    });
  },


  destroy: function(name, record) {
    /* jshint unused: false */
    return ajax({
      url: "https://api.parse.com/1/classes/gatherings/" + record.id,
      type: "DELETE"
    });
  },


  save: function(name, record) {
  /* jshint unused: false */
  if(record.id) {
    delete record.attendees;
    return ajax({
      url: "https://api.parse.com/1/classes/gatherings/" + record.id,
      type: "PUT",
      data: JSON.stringify(record.toJSON())
    }).then(function(response) {
      record.updatedAt = response.updatedAt;
      return record;
    });
  } else {
    return ajax({
      url: "https://api.parse.com/1/classes/gatherings",
      type: "POST",
      data: JSON.stringify(record.toJSON())
    }).then(function(response) {
      record.id = response.objectId;
      record.createdAt = response.createdAt;
      return record;
    });
  }
}

});
