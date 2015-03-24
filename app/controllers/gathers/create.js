import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createGather: function(){
      this.uploadPicture().then(function(imageFile){
        var userId = this.get('session.currentUser.id');
        var data = this.get('model');
        data.gatherImage = {
          "name": imageFile.name,
          "__type": "File"
        };

        data.set('createdBy', {
          __type: 'Pointer',
          className: '_User',
          objectId: userId
        });

        ajax({
          url:  "https://api.parse.com/1/classes/gatherings",
          type: "POST",
          data: JSON.stringify(data),
          contentType: 'application/json'
        }).then(function(){
          this.transitionToRoute('gathers.index');
        }.bind(this));
      }.bind(this));
    }
  },

  uploadPicture: function() {
    var file = this.get('gatherPictureFile');
    return ajax({
      url: "https://api.parse.com/1/files/" + file.name,
      type: "POST",
      contentType: file.type,
      data: file,
      processData: false
    });
  }
});
