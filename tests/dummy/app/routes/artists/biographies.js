import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
    model() {
        return this.store.query('echonest-biography', {
            method: 'biographies',
            name: 'Weezer'
        });
    }
});
