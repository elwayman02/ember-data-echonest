import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  text: attr('string'),
  site: attr('string'),
  url: attr('string'),
  license: attr()
});
