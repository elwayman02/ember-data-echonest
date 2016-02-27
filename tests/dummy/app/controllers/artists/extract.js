import Ember from 'ember';

const { Controller, isPresent } = Ember;

export default Controller.extend({
    artists: null,
    text: '',

    actions: {
        extract(text) {
            text = text || this.get('text');
            if (isPresent(text)) {
                this.store.query('echonest-artist', {
                    text,
                    method: 'extract',
                    results: 100,
                    sort: 'hotttnesss-desc',
                    bucket: ['familiarity_rank', 'hotttnesss_rank', 'years_active']
                }).then((artists) => {
                    this.set('artists', artists);
                });
            }
        }
    }
});
