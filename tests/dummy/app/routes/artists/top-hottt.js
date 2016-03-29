import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
    model() {
        return this.store.query('echonest-artist', {
            method: 'top_hottt',
            results: 1000,
            bucket: ['familiarity_rank', 'hotttnesss_rank', 'years_active']
        });
    }
});
