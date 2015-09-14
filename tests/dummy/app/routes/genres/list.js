import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.query('echonest-genre', {
            method: 'list',
            bucket: ['description', 'urls'],
            results: 2000
        });
    }
});
