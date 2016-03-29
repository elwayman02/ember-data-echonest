import { moduleFor, test } from 'ember-qunit';

let adapter;

moduleFor('adapter:echonest-artist', 'Unit | Adapter | echonest artist', {
    setup() {
        adapter = this.subject({
            ENV: {
                ECHONEST_KEY: 'ABCD1234'
            }
        });
    }
});

test('pathForType', function (assert) {
    assert.equal(adapter.pathForType('echonest-artist'), 'artist', 'artist is returned from pathForType');
});

//TODO: Add test for genre lookup (buildURL)
