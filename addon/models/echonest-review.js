import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
    dateFound: attr('date'),
    dateReviewed: attr('date'),
    imageUrl: attr('string'),
    release: attr('string'),
    name: attr('string'),
    summary: attr('string'),
    url: attr('string')
});
