import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test';

moduleFor('serializer:echonest-biography', 'Unit | Serializer | echonest biography', {

});

test('`normalizeResponse` works properly', function(assert) {
  assert.expect(1);

  const store = {};
  const primaryModelClass = () => {};
  const id = null;
  const requestType = 'query';
  const payload = {
    response: {
      "biographies": [{
        site: "myspace",
        text: "FOLLOW US MORE VIDEOS",
        truncated: true
      }, {
        site: "facebook",
        text: "green album is the best",
        truncated: false
      }]
    }
  };

  let serializer = this.subject();

  let superStub = this.stub(serializer, '_super', (store, primaryModelClass, payload, id, requestType) => {
    return payload;
  });

  let normalized = serializer.normalizeResponse(store, primaryModelClass, payload, id, requestType);

  const expected = {
    'echonest-biography': [{
      site: "myspace",
      text: "FOLLOW US MORE VIDEOS"
    }, {
      site: "facebook",
      text: "green album is the best"
    }]
  };

  assert.deepEqual(normalized, expected, '`normalizeResponse` works');
});
