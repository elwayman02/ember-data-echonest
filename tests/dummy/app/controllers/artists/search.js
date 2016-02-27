import Ember from 'ember';

const { Controller, isPresent } = Ember;

export default Controller.extend({
    artists: null,
    keyword: '',

    actions: {
        search(name) {
            name = name || this.get('keyword');
            if (isPresent(name)) {
                this.store.query('echonest-artist', {
                    name,
                    method: 'search',
                    results: 100,
                    sort: 'hotttnesss-desc',
                    fuzzy_match: true,
                    bucket: ['familiarity_rank', 'hotttnesss_rank', 'years_active']
                }).then((artists) => {
                    this.set('artists', artists);
                });
            }
        }
    }
});
