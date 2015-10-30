import Ember from 'ember';

const { Component, computed, isEqual, isPresent } = Ember;

export default Component.extend({
    songMap: computed.map('songs', function (song) {
        const types = song.get('songType');
        if (isPresent(types)) {
            song.set('types', types.join(', '));
        }
        return song;
    }),

    songList: computed.sort('songMap', 'sortBy'),

    sortBy: [],

    actions: {
        updateSortBy(attr) {
            const sortBy = this.get('sortBy')[0];
            let newSortBy = `${attr}:asc`;

            if (isPresent(sortBy) && isEqual(sortBy, `${attr}:asc`)) {
                newSortBy = `${attr}:desc`;
            }

            this.set('sortBy', [newSortBy]);
        }
    }
});
