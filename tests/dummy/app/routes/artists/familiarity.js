import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
    model() {
        return this.store.queryRecord('echonest-artist', {
            method: 'familiarity',
            name: 'Radiohead'
        });
    }
});
