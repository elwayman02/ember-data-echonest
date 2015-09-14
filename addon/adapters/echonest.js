import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://developer.echonest.com',
    namespace: 'api/v4',
    apiKey: null,
    dataType: 'jsonp',

    initApiKey: Ember.on('init', function () {
        const ENV = this.container.lookupFactory('config:environment');
        if (Ember.isPresent(ENV) && Ember.isPresent(ENV.ECHONEST_KEY)) {
            this.set('apiKey', ENV.ECHONEST_KEY);
        } else {
            Ember.Logger.warn('Echonest Key was not found in your environment config!');
        }
    }),

    buildURL(modelName, id, snapshot, requestType, query) {
        let url = this._super.apply(this, arguments);
        if (Ember.isPresent(query) && Ember.isPresent(query.method)) {
            const method = query.method;
            delete query.method;
            return `${url}/${method}`;
        }
        return url;
    },

    ajaxOptions(url, type, options) {
        const apiKey = this.get('apiKey');
        Ember.assert('An Echonest API Key must be provided', apiKey);
        const dataType = this.get('dataType');

        const hash = this._super.apply(this, arguments);
        hash.data = hash.data || {};
        hash.data.api_key = apiKey;
        hash.data.format = dataType;
        hash.dataType = dataType;
        hash.traditional = true;
        return hash;
    }
});
