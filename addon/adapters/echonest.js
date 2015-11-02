import Ember from 'ember';
import DS from 'ember-data';

const { Logger, assert, isPresent, on } = Ember;
const { RESTAdapter } = DS;

export default RESTAdapter.extend({
    host: 'http://developer.echonest.com',
    namespace: 'api/v4',
    apiKey: null,
    dataType: 'jsonp',

    initApiKey: on('init', function () {
        const ENV = this.container.lookupFactory('config:environment');
        if (isPresent(ENV) && isPresent(ENV.ECHONEST_KEY)) {
            this.set('apiKey', ENV.ECHONEST_KEY);
        } else {
            Logger.warn('Echonest Key was not found in your environment config!');
        }
    }),

    pathForType(modelName) {
        return modelName.replace('echonest-', '');
    },

    buildURL(modelName, id, snapshot, requestType, query) {
        const url = this._super.apply(this, arguments);
        if (isPresent(query) && isPresent(query.method)) {
            const method = query.method;
            delete query.method;
            return `${url}/${method}`;
        }
        return url;
    },

    ajaxOptions() {
        const apiKey = this.get('apiKey');
        assert('An Echonest API Key must be provided', apiKey);
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
