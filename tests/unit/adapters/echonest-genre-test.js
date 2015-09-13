import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:echonest-genre', 'Unit | Adapter | echonest genre', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var adapter = this.subject({
    ENV: {
      ECHONEST_KEY: 'ABCD1234'
    }
  });
  assert.ok(adapter);
});
