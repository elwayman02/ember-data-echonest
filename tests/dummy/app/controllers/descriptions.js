import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
    type: 'style',

    descriptions: computed('type', function () {
        return this.store.query('echonest-description', { type: this.get('type') });
    })
});
