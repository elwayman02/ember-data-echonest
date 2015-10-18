import Ember from 'ember';
import { moduleFor } from 'ember-qunit';
import test from 'dummy/tests/ember-sinon-qunit/test';

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

let name, id, snapshot, requestType, method, query, presentSpy;

function setupBuildURLTests(noQuery, noMethod) {
    presentSpy = this.spy(Ember, 'isPresent');

    name = 'foo';
    id = 1234;
    snapshot = {};
    requestType = 'bar';
    method = 'stuff';
    query = { method };

    if (noQuery) {
        query = undefined;
    } else if (noMethod) {
        query.method = undefined;
    }

    return adapter.buildURL(name, id, snapshot, requestType, query);
}

test('buildURL checks for query/method presence', function (assert) {
    setupBuildURLTests.call(this);

    assert.ok(presentSpy.calledTwice, 'isPresent was called twice');
    const { args: firstArgs } = presentSpy.firstCall;
    assert.equal(firstArgs.length, 1, '1 param passed to first isPresent call');
    assert.equal(firstArgs[0], query, 'query passed to first isPresent call');
    const { args: secondArgs } = presentSpy.secondCall;
    assert.equal(secondArgs.length, 1, '1 param passed to second isPresent call');
    assert.equal(secondArgs[0], method, 'method passed to second isPresent call');
});

test('buildURL adds method to url', function (assert) {
    const result = setupBuildURLTests.call(this);

    assert.ok(result.indexOf(method), 'method appended to url');
    assert.equal(query.method, undefined, 'method deleted from query');
});

test('buildURL does nothing if no query is passed', function (assert) {
    const result = setupBuildURLTests.call(this, true);

    assert.ok(presentSpy.calledOnce, 'isPresent was called once');
    assert.equal(result.indexOf(method), -1, 'no method was added to url');
});

test('buildURL does nothing if no method is passed', function (assert) {
    const result = setupBuildURLTests.call(this, false, true);

    assert.ok(presentSpy.calledTwice, 'isPresent was called twice');
    assert.ok(!presentSpy.secondCall.returnValue, 'isPresent returned false for method presence');
    assert.equal(result.indexOf(method), -1, 'no method was added to url');
});
