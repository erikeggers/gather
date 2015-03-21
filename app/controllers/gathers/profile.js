import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  actions: {
    updateAccount: function() {
      var data = this.get('model');
      console.log(data);
      return ajax({
        url: "https://api.parse.com/1/users/" + data.id,
        type: "PUT",
        data: JSON.stringify({firstName: data.firstName, lastName: data.lastName, password: data.password, username: data.username, email: data.username}),
      }).then(function(){
        this.transitionToRoute('gathers.index');
      }.bind(this));
    }
  }
});
