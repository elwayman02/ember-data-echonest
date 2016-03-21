import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
    lastfmUrl: attr('string'),
    mbUrl: attr('string'),
    myspaceUrl: attr('string'),
    officialUrl: attr('string'),
    twitterUrl: attr('string')
});
