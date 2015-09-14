import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  name: attr('string'),
  url: attr('string'),
  summary: attr('string'),
  dateFound: attr('date'),
  datePosted: attr('date'),
  artistId: attr('string')
});
