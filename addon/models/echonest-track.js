import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
    albumDate: attr('string'),
    albumName: attr('string'),
    albumType: attr('string'),
    analyzerVersion: attr('string'),
    artist: attr('string'),
    audioMd5: attr('string'),
    audioSummary: attr(), // object
    catalog: attr('string'),
    foreignId: attr('string'),
    foreignIds: attr(), // array
    foreignReleaseId: attr('string'),
    foreignReleaseIds: attr(), // array
    md5: attr('string'), // Some tracks return `audioMd5` instead
    previewUrl: attr('string'),
    release: attr('string'),
    releaseImage: attr('string'),
    songId: attr('string'),
    status: attr('string'),
    title: attr('string')
});
