import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:echonest-artist', 'Unit | Adapter | echonest artist', {
  unit: true
});

test('`pathForType` is correct', function(assert) {
  assert.expect(1);

  const adapter = this.subject();

  assert.equal(adapter.pathForType(), 'artist');
});
