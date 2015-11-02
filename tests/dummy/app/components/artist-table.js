import Ember from 'ember';

const { ArrayProxy, Component, computed, defineProperty, get, isPresent, on } = Ember;

export default Component.extend({
    artist: null,

    artists: computed('artist', function () {
        const artist = this.get('artist');
        let content = Ember.A();
        if (isPresent(artist)) {
            content.push(artist);
        }
        return ArrayProxy.create({ content });
    }),

    artistList: computed.map('artists', function (artist) {
        const yearsActive = artist.get('yearsActive');
        if (isPresent(yearsActive)) {
            artist.set('years', yearsActive.map(function (year) {
                const end = get(year, 'end');
                return `${get(year, 'start')}-${isPresent(end) ? end : 'Present'}`;
            }).join(', '));
        }
        return artist;
    }),

    setupColumns: on('init', function() {
        ['familiarity', 'familiarityRank', 'hotttnesss', 'hotttnesssRank', 'years'].forEach((column) => {
            defineProperty(this, column, computed('artistList', function () {
                return this.get('artistList').any(function (artist) {
                    return isPresent(artist.get(column));
                });
            }));
        });
    })
});
