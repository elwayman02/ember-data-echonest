import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
    albumDate: attr('string'),
    albumName: attr('string'),
    albumType: attr('string'),
    catalog: attr('string'),
    foreignId: attr('string'),
    foreignReleaseId: attr('string'),
    previewUrl: attr('string'),
    releaseImage: attr('string')
});
