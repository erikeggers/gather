import Ember from 'ember';

export function mailtoLink(input) {
   var mailTo = '<a href="mailto:' + input + '" class="btn btn-primary" role="button">';
   mailTo += 'Contact' + '</a>';
   return new Ember.Handlebars.SafeString(mailTo);
}

export default Ember.Handlebars.makeBoundHelper(mailtoLink);
