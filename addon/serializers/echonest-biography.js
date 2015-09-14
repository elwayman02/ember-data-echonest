import DS from 'ember-data';

const { RESTSerializer } = DS;

export default RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    debugger
    if (payload.response && payload.response.biographies) {
      const biographies = payload.response.biographies.map((bio, index) => {
        bio.id = index;
        delete bio.truncated;

        return bio;
      });

      return this._super(store, primaryModelClass, { 'echonest-biography': biographies }, id, requestType);
    }

    return this._super.apply(this, arguments);
  }
});
