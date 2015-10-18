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

test('defaults', function (assert) {
    assert.equal(adapter.get('host'), 'http://developer.echonest.com', 'host is set by default');
    assert.equal(adapter.get('namespace'), 'api/v4', 'namespace is set by default');
    assert.equal(adapter.get('dataType'), 'jsonp', 'dataType is jsonp by default');
});

test('sets apiKey on init', function (assert) {
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

let url, type, data, options;

function setupOptionsTests(noData) {
    url = 'http://foo.com/bar';
    type = 'GET';
    data = { foo: 'bar' };
    if (noData) {
        options = {};
    } else {
        options = { data };
    }

    return adapter.ajaxOptions(url, type, options);
}

test('ajaxOptions asserts API key existence', function (assert) {
    const spy = this.spy(Ember, 'assert');

    setupOptionsTests.call(this);

    let args;
    if (spy.calledOnce) {
        assert.ok(spy.calledOnce, 'assert was called once');
        args = spy.firstCall.args;
    } else { // TODO: Remove these checks and just use the above once Ember v2.2.0 lands
        assert.equal(spy.callCount, 13, 'assert was called 13 times');
        args = spy.getCall(4).args;
    }
    assert.equal(Ember.typeOf(args[0]), 'string', 'Error message passed to assert');
    assert.equal(args[1], ECHONEST_KEY, 'apiKey passed to assert');
});

test('ajaxOptions builds data hash for request', function (assert) {
    const result = setupOptionsTests.call(this);

    assert.ok(Ember.isPresent(result.data), 'data hash exists');
    assert.equal(result.data.foo, data.foo, 'existing data is preserved');
    assert.equal(result.data.api_key, ECHONEST_KEY, 'apiKey is set in data');
    assert.equal(result.data.format, adapter.get('dataType'), 'dataType is set in data');
});

test('ajaxOptions creates new data hash if one does not exist', function (assert) {
    const result = setupOptionsTests.call(this, true);

    assert.ok(Ember.isPresent(result.data), 'data hash exists');
    const keys = Object.keys(result.data);
    assert.equal(keys.length, 2, '2 keys in data hash');
    assert.equal(result.data.api_key, ECHONEST_KEY, 'apiKey is set in data');
    assert.equal(result.data.format, adapter.get('dataType'), 'dataType is set in data');
});

test('ajaxOptions sets hash params', function (assert) {
    const result = setupOptionsTests.call(this);

    assert.equal(result.dataType, adapter.get('dataType'), 'dataType is set in hash');
    assert.ok(result.traditional, 'traditional is set to true');
});
