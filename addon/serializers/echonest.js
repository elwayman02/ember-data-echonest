import Ember from 'ember';
import DS from 'ember-data';

const { String: { pluralize, underscore }, isBlank, isPresent } = Ember;
const { RESTSerializer } = DS;

export default RESTSerializer.extend({
    modelKey: '',

    removalList: [],

    pluralizeKey(key) {
        return pluralize(key);
    },

    keyForAttribute(attr/*, method*/) {
        return underscore(attr);
    },

    deleteProperties(hash) {
        const removalList = this.get('removalList');

        removalList.forEach(function(property) {
            delete hash[property];
        });
    },

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        const key = this.get('modelKey');
        const pluralKey = this.pluralizeKey(key);
        if (isPresent(key) && isPresent(payload.response)) {
            if (isPresent(payload.response[pluralKey])) {
                const items = payload.response[pluralKey].map((item, index) => {
                    if (isBlank(item.id)) {
                        item.id = index;
                    }

                    this.deleteProperties(item);
                    return item;
                });
                return this._super(store, primaryModelClass, { [`echonest-${key}`]: items }, id, requestType);
            } else if (isPresent(payload.response[key])) {
                return this._super(store, primaryModelClass, { [`echonest-${key}`]: payload.response[key] }, id, requestType);
            }

        }

        return this._super.apply(this, arguments);
    }
});