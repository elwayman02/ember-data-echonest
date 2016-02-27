import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
    name: attr('string'),
    dateFound: attr('date'),
    datePosted: attr('date'),
    summary: attr(),
    url: attr('string')
});
