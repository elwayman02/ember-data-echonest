import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://developer.echonest.com',
  namespace: 'api/v4',
  apiKey: null,
  dataType: 'jsonp',

  initApiKey: Ember.on('init', function () {
    const ENV = this.container.lookupFactory('config:environment');
    this.set('apiKey', ENV.ECHONEST_KEY);
  }),

  ajaxOptions() {
    const apiKey = this.get('apiKey');
    Ember.assert('An Echonest API Key must be provided', apiKey);
    const dataType = this.get('dataType');

    const hash = this._super.apply(this, arguments);
    hash.data = hash.data || {};
    hash.data.api_key = apiKey;
    hash.data.format = dataType
    hash.dataType = dataType;
    return hash;
  }
});
