import { moduleFor } from 'ember-qunit';
import test from 'dummy/tests/ember-sinon-qunit/test';

let serializer;

moduleFor('serializer:echonest-twitter', 'Unit | Serializer | echonest twitter', {
    setup() {
        serializer = this.subject();
    }
});

test('modelKey', function (assert) {
    assert.equal(serializer.get('modelKey'), 'twitter', 'default modelKey is set');
});

test('payloadKey', function (assert) {
    assert.equal(serializer.payloadKey('foo'), 'artist', 'overrides `payloadKey` to return proper key for payload');
});
