import Ember from 'ember';

const { Controller, isPresent } = Ember;

export default Controller.extend({
    artist: null,
    keyword: '',
    type: 'overall',

    actions: {
        search(name) {
            name = name || this.get('keyword');
            if (isPresent(name)) {
                this.store.queryRecord('echonest-artist', {
                    name,
                    type: this.get('type'),
                    method: 'hotttnesss'
                }).then((artist) => {
                    this.set('artist', artist);
                });
            }
        }
    }
});
