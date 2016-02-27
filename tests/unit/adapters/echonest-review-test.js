import { moduleFor, test } from 'ember-qunit';

let adapter;

moduleFor('adapter:echonest-news', 'Unit | Adapter | echonest news', {
    setup() {
        adapter = this.subject({
            ENV: {
                ECHONEST_KEY: 'ABCD1234'
            }
        });
    }
});

test('method', function (assert) {
    assert.equal(adapter.get('method'), 'reviews', 'default method is set');
});

test('pathForType', function (assert) {
    assert.equal(adapter.pathForType('echonest-reviews'), 'artist', 'artist is returned from pathForType');
});
