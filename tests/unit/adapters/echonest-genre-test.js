import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:echonest-genre', 'Unit | Adapter | echonest genre', {
});

test('pathForType', function (assert) {
  const adapter = this.subject({
    ENV: {
      ECHONEST_KEY: 'ABCD1234'
    }
  });
  assert.equal(adapter.pathForType(), 'genre', 'genre is returned from pathForType');
});
