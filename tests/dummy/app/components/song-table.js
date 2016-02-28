import Ember from 'ember';
import conditional from 'ember-cpm/macros/conditional';

const { Component, computed, isEqual, isPresent } = Ember;

export default Component.extend({
    songMap: computed.map('songs', function (song, index) {
        const types = song.get('songType');
        if (isPresent(types)) {
            song.set('types', types.join(', '));
        }
        song.set('index', index+1);
        return song;
    }),

    sortedSongs: computed.sort('songMap', 'sortBy'),

    songList: conditional('useSort', 'sortedSongs', 'songMap'),

    sortBy: [],

    showDetails: true,

    showArtist: true,

    allowSorting: true,

    useSort: computed('allowSorting', 'sortBy', function () {
        return this.get('allowSorting') && isPresent(this.get('sortBy'));
    }),

    actions: {
        updateSortBy(attr) {
            if (this.get('allowSorting')) {
                const sortBy = this.get('sortBy')[0];
                let newSortBy = `${attr}:asc`;

                if (isPresent(sortBy) && isEqual(sortBy, `${attr}:asc`)) {
                    newSortBy = `${attr}:desc`;
                }

                this.set('sortBy', [newSortBy]);
            }
        }
    }
});
