import Ember from 'ember';
import layout from '../templates/components/x-login';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Component.extend(LoginControllerMixin, {
  layout: layout,
  authenticator: 'authenticator:parse-email'
});
