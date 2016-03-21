import EchonestSerializer from 'ember-data-echonest/serializers/echonest';

export default EchonestSerializer.extend({
    modelKey: 'twitter',
    payloadKey() {
        return 'artist';
    }
});
