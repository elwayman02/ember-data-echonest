import ArtistAdapter from './echonest-artist';

export default ArtistAdapter.extend({
    method: 'list_terms',

    buildURL(modelName, id, snapshot, requestType, query) {
        if (query.method === 'artist') {
            query.method = 'terms';
        }
        return this._super.call(this, modelName, id, snapshot, requestType, query);
    }
});
