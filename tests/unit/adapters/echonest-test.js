import { moduleFor, test } from 'ember-qunit';

let adapter;
let ECHONEST_KEY;

moduleFor('adapter:echonest', 'Unit | Adapter | echonest', {
    setup() {
        ECHONEST_KEY = 'ABCD1234';
        const ENV = { ECHONEST_KEY };
        adapter = this.subject({
            container: {
                lookupFactory() {
                    return ENV;
                }
            }
        });
    }
});

test('sets apiKey on init', function(assert) {
    assert.equal(adapter.get('apiKey'), ECHONEST_KEY, 'Env config used for apiKey');
});
