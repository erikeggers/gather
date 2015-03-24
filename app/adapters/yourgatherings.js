import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({

  findQuery: function(name, query) {
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/gatherings" + '?where={"createdBy":{"__type":"Pointer","className":"_User","objectId":'+ '\"' + query + '\"' + '}}' + "&include=createdBy").then(function(response){
      return response.results;
    });
  },
});
