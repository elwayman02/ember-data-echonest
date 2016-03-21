import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
    artistLocation: attr(),
    biographies: attr(), // echonest-biography
    blogs: attr(), // echonest-blog
    discovery: attr('number'),
    discoveryRank: attr('number'),
    doc_counts: attr(),
    familiarity: attr('number'),
    familiarityRank: attr('number'),
    genres: attr(), // echonest-genre
    hotttnesss: attr('number'),
    hotttnesssRank: attr('number'),
    images: attr(),
    name: attr('string'),
    news: attr(), // echonest-news
    reviews: attr(), // echonest-reviews
    songs: attr(), // echonest-songs
    teams: attr(),
    twitter: attr('string'),
    urls: attr(),
    video: attr(),
    yearsActive: attr()
});
