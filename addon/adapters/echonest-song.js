import Ember from 'ember';
import EchonestAdapter from 'ember-data-echonest/adapters/echonest';

const { isPresent } = Ember;

export default EchonestAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, query) {
        if (isPresent(query.method)) {
            if (query.method.includes('playlist')) {
                query.method = query.method.replace('playlist/', '');
                return this._super.call(this, 'playlist', id, snapshot, requestType, query);
            } else if (query.method === 'artist') {
                query.method = 'songs';
                return this._super.call(this, 'artist', id, snapshot, requestType, query);
            }
        }
        return this._super.apply(this, arguments);
    }
});
