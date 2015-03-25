import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({

  findQuery: function(name, query) {
    /* jshint unused: false */
    console.log(query);
    return ajax("https://api.parse.com/1/classes/gatherings", {
      data: {
        include: 'createdBy',
        where: {
          "$relatedTo":{
            "object":{
              "__type":"Pointer",
              "className":"_User",
              "objectId": query
            },"key":"attendees"
          }
        }
      }
    }).then(function(response){
      return response.results;
    });
  },
});
