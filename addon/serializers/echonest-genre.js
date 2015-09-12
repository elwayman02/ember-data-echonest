import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  modelNameFromPayloadKey(payloadKey) {
    return this._super(payloadKey);
  },

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.response && payload.response.genres) {
      const genres = payload.response.genres.map(function (genre, index) {
        genre.id = index;
        return genre;
      });
      return this._super(store, primaryModelClass, { 'echonest-genre': genres }, id, requestType);
    }

    return this._super.apply(this, arguments);
  }
});
