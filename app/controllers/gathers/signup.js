import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register: function(){
      this.uploadPicture().then(function(imageFile){
        var data = this.getProperties('firstName', 'lastName', 'username', 'password', 'bio');
        data.email = data.username;

        data.userPhoto = {
          "name": imageFile.name,
          "__type": "File"
        };

        ajax({
          url:  "https://api.parse.com/1/users",
          type: "POST",
          data: JSON.stringify(data),
          contentType: 'application/json'
        }).then(function(response){
          this.session.authenticate('authenticator:parse-email', {
            sessionToken: response.sessionToken
          });
        }.bind(this));
      }.bind(this));
    }
  },

  uploadPicture: function() {
    var file = this.get('accountPictureFile');
    return ajax({
      url: "https://api.parse.com/1/files/" + file.name,
      type: "POST",
      contentType: file.type,
      data: file,
      processData: false
    });
  }
});
