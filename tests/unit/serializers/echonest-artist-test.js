import { moduleFor } from 'ember-qunit';
import test from 'dummy/tests/ember-sinon-qunit/test';

let serializer;

moduleFor('serializer:echonest-artist', 'Unit | Serializer | echonest artist', {
    setup() {
        serializer = this.subject();
    }
});

test('modelKey', function (assert) {
    assert.equal(serializer.get('modelKey'), 'artist', 'default modelKey is set');
});
