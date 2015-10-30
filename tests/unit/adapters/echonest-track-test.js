import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:echonest-track', 'Unit | Adapter | echonest track', {});

test('pathForType', function (assert) {
    const adapter = this.subject({
        ENV: {
            ECHONEST_KEY: 'ABCD1234'
        }
    });
    assert.equal(adapter.pathForType(), 'track', 'track is returned from pathForType');
});
