import Ember from 'ember';

const { Controller, isPresent } = Ember;

export default Controller.extend({
    results: [],
    keyword: '',
    modelKey: '',
    query: {},

    actions: {
        search(name) {
            name = name || this.get('keyword');
            let modelKey = this.get('modelKey');
            if (isPresent(name) && isPresent(modelKey)) {
                this.store.query(`echonest-${modelKey}`, Ember.merge(Ember.copy(this.get('query')), { name })).then((results) => {
                    this.set('results', results);
                });
            }
        }
    }
});
