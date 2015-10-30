import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:echonest-song', 'Unit | Adapter | echonest song', {});

test('pathForType', function (assert) {
    const adapter = this.subject({
        ENV: {
            ECHONEST_KEY: 'ABCD1234'
        }
    });
    assert.equal(adapter.pathForType(), 'song', 'song is returned from pathForType');
});
