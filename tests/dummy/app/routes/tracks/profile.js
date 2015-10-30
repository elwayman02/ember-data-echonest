import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.queryRecord('echonest-track', {
            method: 'profile',
            id: 'TRTLKZV12E5AC92E11',
            bucket: 'audio_summary'
        });
    }
});
