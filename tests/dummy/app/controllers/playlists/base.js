import Ember from 'ember';

const { Controller, isPresent } = Ember;

export default Controller.extend({
    playlist: [],

    actions: {
        search(keyword) {
            keyword = keyword || this.get('keyword');
            if (isPresent(keyword)) {
                this.store.query('echonest-song', {
                    artist: keyword,
                    method: 'playlist/basic',
                    results: 100
                }).then((playlist) => {
                    this.set('playlist', playlist);
                });
            }
        }
    }
});
