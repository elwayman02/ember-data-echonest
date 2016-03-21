import { moduleFor, test } from 'ember-qunit';

let adapter;

moduleFor('adapter:echonest-urls', 'Unit | Adapter | echonest urls', {
    setup() {
        adapter = this.subject({
            ENV: {
                ECHONEST_KEY: 'ABCD1234'
            }
        });
    }
});

test('method', function (assert) {
    assert.equal(adapter.get('method'), 'urls', 'default method is set');
});

test('pathForType', function (assert) {
    assert.equal(adapter.pathForType('echonest-urls'), 'artist', 'artist is returned from pathForType');
});
