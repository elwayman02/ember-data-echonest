import Ember from 'ember';

const { Controller, isPresent } = Ember;

export default Controller.extend({
    artist: null,

    actions: {
        search(name) {
            name = name || this.get('keyword');
            if (isPresent(name)) {
                this.store.queryRecord('echonest-artist', {
                    name,
                    method: 'familiarity'
                }).then((artist) => {
                    this.set('artist', artist);
                });
            }
        }
    }
});
