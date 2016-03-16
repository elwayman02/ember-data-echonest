import { moduleFor, test } from 'ember-qunit';

let adapter;

moduleFor('adapter:echonest-image', 'Unit | Adapter | echonest image', {
    setup() {
        adapter = this.subject({
            ENV: {
                ECHONEST_KEY: 'ABCD1234'
            }
        });
    }
});

test('method', function (assert) {
    assert.equal(adapter.get('method'), 'images', 'default method is set');
});

test('pathForType', function (assert) {
    assert.equal(adapter.pathForType('echonest-image'), 'artist', 'artist is returned from pathForType');
});
