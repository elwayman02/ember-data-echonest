import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.query('echonest-song', {
            method: 'profile',
            id: ['SOYOUXP14DAE470D22', 'SOORVLT13ADC025EF9'],
            bucket: ['song_currency', 'song_discovery', 'song_hotttnesss', 'song_type']
        });
    }
});
