import Ember from 'ember';
import DS from 'ember-data';

const { isPresent } = Ember;
const { RESTSerializer } = DS;

export default RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        if (isPresent(payload.response) && isPresent(payload.response.genres)) {
            const genres = payload.response.genres.map(function (genre, index) {
                genre.id = index;
                return genre;
            });

            return this._super(store, primaryModelClass, { 'echonest-genre': genres }, id, requestType);
        }

        return this._super.apply(this, arguments);
    }
});
