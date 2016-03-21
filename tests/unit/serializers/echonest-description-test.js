import { moduleFor } from 'ember-qunit';
import test from 'dummy/tests/ember-sinon-qunit/test';

let serializer;

moduleFor('serializer:echonest-description', 'Unit | Serializer | echonest description', {
    setup() {
        serializer = this.subject();
    }
});

test('modelKey', function (assert) {
    assert.equal(serializer.get('modelKey'), 'description', 'default modelKey is set');
});

test('payloadKey', function (assert) {
    assert.equal(serializer.payloadKey('foo'), 'terms', 'overrides `payloadKey` to return proper key for payload');
});
