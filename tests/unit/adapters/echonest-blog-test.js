import { moduleFor, test } from 'ember-qunit';

let adapter;

moduleFor('adapter:echonest-blog', 'Unit | Adapter | echonest blog', {
    setup() {
        adapter = this.subject({
            ENV: {
                ECHONEST_KEY: 'ABCD1234'
            }
        });
    }
});

test('method', function (assert) {
    assert.equal(adapter.method, 'blogs', 'default method is set');
});

test('pathForType', function (assert) {
    assert.equal(adapter.pathForType('echonest-blog'), 'artist', 'artist is returned from pathForType');
});
