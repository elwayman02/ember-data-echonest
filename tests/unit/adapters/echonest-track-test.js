import { moduleFor, test } from 'ember-qunit';

let adapter;

moduleFor('adapter:echonest-track', 'Unit | Adapter | echonest track', {
    setup() {
        adapter = this.subject({
            ENV: {
                ECHONEST_KEY: 'ABCD1234'
            }
        });
    }
});

test('pathForType', function (assert) {
    assert.equal(adapter.pathForType('echonest-track'), 'track', 'track is returned from pathForType');
});
