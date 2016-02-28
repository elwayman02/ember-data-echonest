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

let name, id, snapshot, requestType, action, method, query;

function setupBuildURLTests(noPlaylist, artist) {
    name = 'foo';
    id = null;
    snapshot = {};
    requestType = 'bar';
    action = 'stuff';
    method = `playlist/${action}`;
    query = { method };

    if (noPlaylist) {
        query.method = method = 'baz';
    }

    if (artist) {
        query.method = method = 'artist';
    }

    return adapter.buildURL(name, id, snapshot, requestType, query);
}

test('buildURL', function (assert) {
    const result = setupBuildURLTests.call(this, true);

    assert.ok(result.includes(name), 'modelName is added to url');
});

test('buildURL uses playlist as modelName if passed as method', function (assert) {
    const result = setupBuildURLTests.call(this);

    assert.ok(result.includes(method), 'playlist & action added to url');
    assert.ok(!result.includes(name), 'modelName is not added to url when playlist is passed');
});

test('buildURL uses artist as modelName if passed as method', function (assert) {
    const result = setupBuildURLTests.call(this, true, true);

    assert.ok(result.includes(`${method}/songs`), 'artist/songs added to url');
    assert.ok(!result.includes(name), 'modelName is not added to url when playlist is passed');
});
