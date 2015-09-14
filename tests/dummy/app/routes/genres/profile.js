import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.query('echonest-genre', {
            method: 'profile',
            name: 'rock',
            bucket: ['description', 'urls']
        });
    }
});
