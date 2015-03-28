import {
  mailtoLink
} from '../../../helpers/mailto-link';
import { module, test } from 'qunit';

module('MailtoLinkHelper');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = mailtoLink(42);
  assert.ok(result);
});
