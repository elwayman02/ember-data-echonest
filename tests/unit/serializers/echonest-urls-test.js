import { moduleFor } from 'ember-qunit';
import test from 'dummy/tests/ember-sinon-qunit/test';

let serializer;

moduleFor('serializer:echonest-urls', 'Unit | Serializer | echonest urls', {
    setup() {
        serializer = this.subject();
    }
});

test('modelKey', function (assert) {
    assert.equal(serializer.get('modelKey'), 'urls', 'default modelKey is set');
});

test('modelNameFromPayloadKey', function (assert) {
    let key = 'foo';
    assert.equal(serializer.modelNameFromPayloadKey(key), key, 'modelNameFromPayloadKey does not alter input key');
});
