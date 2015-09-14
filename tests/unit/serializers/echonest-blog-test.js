import { moduleForModel, test } from 'ember-qunit';

moduleForModel('echonest-blog', 'Unit | Serializer | echonest blog', {
  needs: ['serializer:echonest-blog']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
