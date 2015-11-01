import EchonestAdapter from 'ember-data-echonest/adapters/echonest';

export default EchonestAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, query) {
        if (query.method.includes('playlist')) {
            query.method = query.method.replace('playlist/', '');
            return this._super.call(this, 'playlist', id, snapshot, requestType, query);
        }
        return this._super.apply(this, arguments);
    }
});
