import Ember from 'ember';

const { Controller, isPresent } = Ember;

export default Controller.extend({
    genres: [],

    actions: {
        search(title) {
            title = title || this.get('title');
            if (isPresent(title)) {
                this.store.query('echonest-song', {
                    title,
                    method: 'search',
                    results: 100
                }).then((songs) => {
                    this.set('songs', songs);
                });
            }
        }
    }
});
