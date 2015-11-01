import { moduleFor, test } from 'ember-qunit';

let adapter;

moduleFor('adapter:echonest-genre', 'Unit | Adapter | echonest genre', {
    setup() {
        adapter = this.subject({
            ENV: {
                ECHONEST_KEY: 'ABCD1234'
            }
        });
    }
});

test('pathForType', function (assert) {
    assert.equal(adapter.pathForType('echonest-genre'), 'genre', 'genre is returned from pathForType');
});
