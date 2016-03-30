import { moduleForModel, test } from 'ember-qunit';

moduleForModel('echonest-video', 'Unit | Serializer | echonest video', {
  // Specify the other units that are required for this test.
  needs: ['serializer:echonest-video']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
