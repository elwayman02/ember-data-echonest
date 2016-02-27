import { moduleFor, test } from 'ember-qunit';

let adapter;

moduleFor('adapter:echonest-biography', 'Unit | Adapter | echonest biography', {
    setup() {
        adapter = this.subject({
            ENV: {
                ECHONEST_KEY: 'ABCD1234'
            }
        });
    }
});

test('method', function (assert) {
    assert.equal(adapter.get('method'), 'biographies', 'default method is set');
});


test('pathForType', function (assert) {
    assert.equal(adapter.pathForType('echonest-biography'), 'artist', 'artist is returned from pathForType');
});
