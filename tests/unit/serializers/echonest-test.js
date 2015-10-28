import Ember from 'ember';
import { moduleFor } from 'ember-qunit';
import test from 'dummy/tests/ember-sinon-qunit/test';

let serializer;

moduleFor('serializer:echonest', 'Unit | Serializer | echonest', {
    setup() {
        serializer = this.subject();
    }
});

test('pluralizeKey', function (assert) {
    const key = 'foo';
    const result = serializer.pluralizeKey(key);

    assert.equal(result, `${key}s`, 'pluralizes key');
});

test('keyForAttribute', function (assert) {
    const attr = 'fooBar';
    const result = serializer.keyForAttribute(attr);

    assert.equal(result, 'foo_bar', 'converts attribute to underscore');
});

let store, modelClass, payload, response, key, items, id, type, foo, normalizeStub;

function setupNormalizeTests(showResp, showitems) {
    store = {};
    modelClass = 'model';
    id = 1234;
    type = 'findAll';
    foo = 'bar';
    key = 'item';

    payload = { stuff: 'things' };
    response = {};
    items = [{
        name: 'baz'
    }, {
        name: 'bat'
    }];

    if (showResp) {
        if (showitems) {
            response.items = items;
        }
        payload.response = response;
    }

    normalizeStub = this.stub(serializer, '_normalizeResponse', function () {
        return foo;
    });

    serializer.set('modelKey', key);

    return serializer.normalizeResponse(store, modelClass, payload, id, type);
}

function assertNormalizeArguments(assert, args) {
    assert.equal(args.length, 6, '6 arguments passed to _normalizeResponse'); // last argument is added within Ember-Data
    assert.equal(args[0], store, 'store passed to _super');
    assert.equal(args[1], modelClass, 'primaryModelClass passed to _super');
    assert.equal(args[3], id, 'id passed to _super');
    assert.equal(args[4], type, 'requestType passed to _super');
}

test('normalizeResponse does nothing if no response', function (assert) {
    const result = setupNormalizeTests.call(this);

    assert.ok(normalizeStub.calledOnce, '_normalizeResponse was called once');

    const { args } = normalizeStub.firstCall;
    assertNormalizeArguments(assert, args);
    assert.equal(args[2], payload, 'payload passed to _super');
    assert.equal(result, foo, 'returns result from _super');
});

test('normalizeResponse does nothing if no items', function (assert) {
    const result = setupNormalizeTests.call(this, true);

    assert.ok(normalizeStub.calledOnce, '_normalizeResponse was called once');

    const { args } = normalizeStub.firstCall;
    assert.equal(args[2], payload, 'payload passed to _super');
    assert.equal(result, foo, 'returns result from _super');
});

test('normalizeResponse builds response', function (assert) {
    const result = setupNormalizeTests.call(this, true, true);

    assert.ok(normalizeStub.calledOnce, '_normalizeResponse was called once');

    const { args } = normalizeStub.firstCall;
    assertNormalizeArguments(assert, args);

    const [,,itemPayload] = args;
    const itemList = itemPayload[`echonest-${key}`];
    assert.ok(Ember.isPresent(itemList), 'correct model key is added to payload');
    assert.equal(itemList.length, 2, 'item payload is preserved');
    assert.equal(itemList[0].id, 0, 'arbitrary id is added');
    assert.equal(itemList[0].name, items[0].name, 'item order is preserved');
    assert.equal(itemList[1].id, 1, 'arbitrary id is added');
    assert.equal(itemList[1].name, items[1].name, 'item order is preserved');

    assert.equal(result, foo, 'returns result from _super');
});
