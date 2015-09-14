import DS from 'ember-data';

const { RESTSerializer } = DS;

export default RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.response && payload.response.artist) {
      const artist = payload.response.artist;
debugger
      return this._super(store, primaryModelClass, { 'echonest-artist': [ artist ] }, id, requestType);
    }

    return this._super.apply(this, arguments);
  }
});
