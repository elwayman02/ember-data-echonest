import Ember from 'ember';
import DS from 'ember-data';

const { String: { pluralize, underscore }, isArray, isBlank, isPresent } = Ember;
const { RESTSerializer } = DS;

export default RESTSerializer.extend({
    modelKey: '',

    removalList: [],

    payloadKey(key) {
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
        const payloadKey = this.payloadKey(key);
        if (isPresent(key) && isPresent(payload.response)) {
            let response = payload.response[payloadKey];
            if (isPresent(response) || isArray(response)) {
                if (isArray(response)) {
                    response = response.map((item, index) => {
                        if (isBlank(item.id)) {
                            item.id = index; // Hack, replace with Model-fragments when it supports E-D >2.1
                        }

                        this.deleteProperties(item);
                        return item;
                    });
                } else if (isBlank(response.id)) {
                    response.id = id = Math.floor(Math.random() * (100000) + 1); // Mega hack, replace with Model-fragments
                }
                return this._super(store, primaryModelClass, { [`echonest-${key}`]: response }, id, requestType);
            } else if (isPresent(payload.response[key])) {
                return this._super(store, primaryModelClass, { [`echonest-${key}`]: payload.response[key] }, id, requestType);
            }

        }

        return this._super.apply(this, arguments);
    }
});
