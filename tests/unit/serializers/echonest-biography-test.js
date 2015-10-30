import { moduleFor } from 'ember-qunit';
import test from 'dummy/tests/ember-sinon-qunit/test';

let serializer;

moduleFor('serializer:echonest-biography', 'Unit | Serializer | echonest biography', {
    setup() {
        serializer = this.subject();
    }
});

test('modelKey', function (assert) {
    assert.equal(serializer.get('modelKey'), 'biography', 'default modelKey is set');
});

test('removalList', function (assert) {
    assert.deepEqual(serializer.get('removalList'), ['truncated'], 'removalList is set properly');
});
