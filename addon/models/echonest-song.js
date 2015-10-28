import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
    artistId: attr('string'),
    artistName: attr('string'),
    title: attr('string')
});
