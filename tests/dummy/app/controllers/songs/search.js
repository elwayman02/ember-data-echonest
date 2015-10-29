import Ember from 'ember';

const { Controller, isPresent } = Ember;

const searchTypes = [{
    key: 'combined',
    label: 'Title/Artist'
}, {
    key: 'title',
    label: 'Title'
}, {
    key: 'artist',
    label: 'Artist'
}];

export default Controller.extend({
    searchTypes,
    searchKey: searchTypes[0],

    genres: [],

    actions: {
        search(keyword) {
            keyword = keyword || this.get('keyword');
            if (isPresent(keyword)) {
                this.store.query('echonest-song', {
                    [this.get('searchKey.key')]: keyword,
                    method: 'search',
                    bucket: ['song_currency', 'song_discovery', 'song_hotttnesss', 'song_type'],
                    sort: 'song_hotttnesss-desc',
                    results: 100
                }).then((songs) => {
                    this.set('songs', songs);
                });
            }
        }
    }
});
