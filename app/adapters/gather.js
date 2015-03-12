import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({
  find: function(name, id){
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/gather/" + id).then(function(gather){
      gather.id = gather.objectId;
      delete gather.objectId;
      return gather;
    });
  },

  findAll: function(name) {
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/gather").then(function(response){
      return response.results.map(function(gather) {
        gather.id = gather.objectId;
        delete gather.objectId;
        return gather;
      });
    });
  },

  findQuery: function(name, query) {
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/gather", {
      data: Ember.$.param({
              where: JSON.stringify(query)
            })
    }).then(function(response){
      return response.results.map(function(gather) {
        gather.id = gather.objectId;
        delete gather.objectId;
        return gather;
      });
    });
  },

  destroy: function(name, record) {
    /* jshint unused: false */
    return ajax({
      url: "https://api.parse.com/1/classes/gather/" + record.id,
      type: "DELETE"
    });
  },

  save: function(name, record) {
    /* jshint unused: false */
    if(record.id) {
      return ajax({
        url: "https://api.parse.com/1/classes/gather/" + record.id,
        type: "PUT",
        data: JSON.stringify(record)
      }).then(function(response) {
        response.id = response.objectId;
        delete response.objectId;
        return response;
      });
    } else {
      return ajax({
        url: "https://api.parse.com/1/classes/gather",
        type: "POST",
        data: JSON.stringify(record)
      }).then(function(response) {
        record.updatedAt = response.updatedAt;
        return record;
      });
    }
  }
});