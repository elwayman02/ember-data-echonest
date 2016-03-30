import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
    dateFound: attr('date'),
    imageUrl: attr('string'),
    site: attr('string'),
    title: attr('string'),
    url: attr('string')
});
