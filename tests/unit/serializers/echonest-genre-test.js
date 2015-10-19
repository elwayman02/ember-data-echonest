import Ember from 'ember';
import { moduleFor } from 'ember-qunit';
import test from 'dummy/tests/ember-sinon-qunit/test';

let serializer;

moduleFor('serializer:echonest-genre', 'Unit | Serializer | echonest genre', {
  setup() {
      serializer = this.subject();
  }
});

let store, modelClass, payload, response, genres, id, type, foo, normalizeStub, presentSpy;

function setupNormalizeTests(showResp, showGenres) {
    store = {};
    modelClass = 'model';
    id = 1234;
    type = 'findAll';
    foo = 'bar';

    payload = { stuff: 'things' };
    response = {};
    genres = [{
        name: 'rock'
    }, {
        name: 'pop'
    }];

    if (showResp) {
        if (showGenres) {
            response.genres = genres;
        }
        payload.response = response;
    }

    presentSpy = this.spy(Ember, 'isPresent');
    normalizeStub = this.stub(serializer, '_normalizeResponse', function () {
        return foo;
    });

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

    assert.ok(presentSpy.calledOnce, 'isPresent was called once');
    assert.equal(presentSpy.firstCall.args[0], undefined, 'response did not exist');

    assert.ok(normalizeStub.calledOnce, '_normalizeResponse was called once');

    const { args } = normalizeStub.firstCall;
    assertNormalizeArguments(assert, args);
    assert.equal(args[2], payload, 'payload passed to _super');
    assert.equal(result, foo, 'returns result from _super');
});

test('normalizeResponse does nothing if no genres', function (assert) {
    const result = setupNormalizeTests.call(this, true);

    assert.ok(presentSpy.calledTwice, 'isPresent was called twice');
    assert.equal(presentSpy.firstCall.args[0], response, 'response was passed to isPresent');
    assert.equal(presentSpy.secondCall.args[0], undefined, 'genres did not exist');

    assert.ok(normalizeStub.calledOnce, '_normalizeResponse was called once');

    const { args } = normalizeStub.firstCall;
    assert.equal(args[2], payload, 'payload passed to _super');
    assert.equal(result, foo, 'returns result from _super');
});

test('normalizeResponse builds genre response', function (assert) {
    const result = setupNormalizeTests.call(this, true, true);

    assert.ok(presentSpy.calledTwice, 'isPresent was called twice');
    assert.equal(presentSpy.firstCall.args[0], response, 'response was passed to isPresent');
    assert.equal(presentSpy.secondCall.args[0], genres, 'genres were passed to isPresent');

    assert.ok(normalizeStub.calledOnce, '_normalizeResponse was called once');

    const { args } = normalizeStub.firstCall;
    assertNormalizeArguments(assert, args);

    const [,,genrePayload] = args;
    const genreList = genrePayload['echonest-genre'];
    assert.ok(Ember.isPresent(genreList), 'correct model key is added to payload');
    assert.equal(genreList.length, 2, 'genre payload is preserved');
    assert.equal(genreList[0].id, 0, 'arbitrary id is added');
    assert.equal(genreList[0].name, genres[0].name, 'genre order is preserved');
    assert.equal(genreList[1].id, 1, 'arbitrary id is added');
    assert.equal(genreList[1].name, genres[1].name, 'genre order is preserved');

    assert.equal(result, foo, 'returns result from _super');
});
