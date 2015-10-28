import { moduleFor } from 'ember-qunit';
import test from 'dummy/tests/ember-sinon-qunit/test';

let serializer;

moduleFor('serializer:echonest-genre', 'Unit | Serializer | echonest genre', {
  setup() {
      serializer = this.subject();
  }
});

test('modelKey', function (assert) {
    assert.equal(serializer.get('modelKey'), 'genre', 'default modelKey is set');
});
