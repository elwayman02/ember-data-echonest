import Ember from 'ember';
import DS from 'ember-data';

const { String: { pluralize, underscore }, isBlank, isPresent } = Ember;
const { RESTSerializer } = DS;

export default RESTSerializer.extend({
    modelKey: '',

    pluralizeKey(key) {
        return pluralize(key);
    },

    keyForAttribute(attr/*, method*/) {
        return underscore(attr);
    },

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        const key = this.get('modelKey');
        const pluralKey = this.pluralizeKey(key);
        if (isPresent(key) && isPresent(payload.response) && isPresent(payload.response[pluralKey])) {
            const items = payload.response[pluralKey].map(function (item, index) {
                if (isBlank(item.id)) {
                    item.id = index;
                }
                return item;
            });

            return this._super(store, primaryModelClass, { [`echonest-${key}`]: items }, id, requestType);
        }

        return this._super.apply(this, arguments);
    }
});
