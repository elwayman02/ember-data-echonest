import EchonestSerializer from 'ember-data-echonest/serializers/echonest';

export default EchonestSerializer.extend({
    modelKey: 'urls',
    modelNameFromPayloadKey(payloadKey) {
        return payloadKey;
    }
});
