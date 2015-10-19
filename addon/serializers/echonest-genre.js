import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        if (Ember.isPresent(payload.response) && Ember.isPresent(payload.response.genres)) {
            const genres = payload.response.genres.map(function (genre, index) {
                genre.id = index;
                return genre;
            });

            return this._super(store, primaryModelClass, { 'echonest-genre': genres }, id, requestType);
        }

        return this._super.apply(this, arguments);
    }
});
