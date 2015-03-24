import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({

  findQuery: function(name, query) {
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/Post" + '?where={"gather":{"__type":"Pointer","className":"gatherings","objectId":'+ '\"' + query.gather + '\"' + '}}' + "&include=createdBy,gather").then(function(response){
      return response.results.map(function(post) {
        post.id = post.objectId;
        delete post.objectId;
        post.createdBy.id = post.createdBy.objectId;
        post.gather.id = post.gather.objectId;
        delete post.createdBy.objectId;
        delete post.gather.objectId;
        return post;
      });
    });
  },

  save: function(name, record) {
  /* jshint unused: false */
    return ajax({
      url: "https://api.parse.com/1/classes/Post",
      type: "POST",
      data: JSON.stringify(record.toJSON())
    }).then(function(response) {
      record.id = response.objectId;
      record.createdAt = response.createdAt;
      return record;
    });
  }

});
