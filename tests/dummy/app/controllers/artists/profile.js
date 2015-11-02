import Ember from 'ember';

const { Controller, isPresent } = Ember;

export default Controller.extend({
    artist: null,
    keyword: '',

    actions: {
        search(name) {
            name = name || this.get('keyword');
            if (isPresent(name)) {
                this.store.queryRecord('echonest-artist', {
                    name,
                    method: 'profile',
                    bucket: ['familiarity_rank', 'hotttnesss_rank', 'years_active']
                }).then((artist) => {
                    this.set('artist', artist);
                });
            }
        }
    }
});
