import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
    artist_id: attr('string'),
    artist_name: attr('string'),
    title: attr('string')
});
