import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.query('echonest-description', {
            method: 'top',
            results: 1000
        });
    }
});
