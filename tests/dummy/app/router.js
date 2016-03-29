import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
    this.route('index', { path: '/' });
    this.route('artists', function() {
        this.route('biographies');
        this.route('blogs');
        this.route('by-genre');
        this.route('extract');
        this.route('familiarity');
        this.route('hotttnesss');
        this.route('images');
        this.route('profile');
        this.route('news');
        this.route('reviews');
        this.route('search');
        this.route('similar');
        this.route('suggest');
        this.route('twitter');
        this.route('urls');
    });
    this.route('descriptions', function () {
        this.route('artist');
        this.route('list');
        this.route('top');
    });
    this.route('genres', function () {
        this.route('list');
        this.route('profile');
        this.route('search');
        this.route('similar');
    });
    this.route('playlists', function () {
        this.route('base');
    });
    this.route('songs', function () {
        this.route('artist');
        this.route('profile');
        this.route('search');
    });
    this.route('tracks', function () {
        this.route('profile', { path: '/' });
    });
});

export default Router;
