import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({

  findQuery: function(name, userId) {
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/functions/attending", {
      type: "POST",
      data: {
        include: "createdBy",
        user_id: userId
      }
    }).then(function(response){
      return response.result.map(function(gather) {
        gather.id = gather.objectId;
        delete gather.objectId;
        gather.createdBy.id = gather.createdBy.objectId;
        delete gather.createdBy.objectId;
        return gather;
      });
    });
  },
});
