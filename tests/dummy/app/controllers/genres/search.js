import Ember from 'ember';

export default Ember.Controller.extend({
    genres: [],

    actions: {
        search(name) {
            name = name || this.get('name');
            if (name) {
                this.store.query('echonest-genre', {
                    name,
                    method: 'search',
                    bucket: ['description', 'urls'],
                    results: 2000
                }).then((genres) => {
                    this.set('genres', genres);
                });
            }
        }
    }
});
