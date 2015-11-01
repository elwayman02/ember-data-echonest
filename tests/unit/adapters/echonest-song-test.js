import { moduleFor, test } from 'ember-qunit';

let adapter;

moduleFor('adapter:echonest-song', 'Unit | Adapter | echonest song', {
    setup() {
        adapter = this.subject({
            ENV: {
                ECHONEST_KEY: 'ABCD1234'
            }
        });
    }
});

test('pathForType', function (assert) {
    assert.equal(adapter.pathForType('echonest-song'), 'song', 'song is returned from pathForType');
});

// TODO: buildURL test for playlist
