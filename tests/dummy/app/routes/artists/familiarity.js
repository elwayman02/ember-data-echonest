import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
    model() {
        return this.store.query('echonest-artist', {
            method: 'familiarity',
            name: 'Radiohead'
        });
    }
});
