import { moduleForModel, test } from 'ember-qunit';

moduleForModel('echonest-track', 'Unit | Model | echonest track', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
