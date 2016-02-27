import { moduleFor } from 'ember-qunit';
import test from 'dummy/tests/ember-sinon-qunit/test';

let serializer;

moduleFor('serializer:echonest-news', 'Unit | Serializer | echonest news', {
    setup() {
        serializer = this.subject();
    }
});

test('modelKey', function (assert) {
    assert.equal(serializer.get('modelKey'), 'news', 'default modelKey is set');
});
