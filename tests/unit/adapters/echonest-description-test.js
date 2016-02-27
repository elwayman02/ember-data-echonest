import { moduleFor, test } from 'ember-qunit';

let adapter;

moduleFor('adapter:echonest-description', 'Unit | Adapter | echonest description', {
    setup() {
        adapter = this.subject({
            ENV: {
                ECHONEST_KEY: 'ABCD1234'
            }
        });
    }
});

test('method', function (assert) {
    assert.equal(adapter.method, 'list_terms', 'default method is set');
});

test('pathForType', function (assert) {
    assert.equal(adapter.pathForType('echonest-description'), 'artist', 'artist is returned from pathForType');
});
