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
        this.route('extract');
        this.route('familiarity');
        this.route('hotttnesss');
        this.route('profile');
        this.route('news');
        this.route('reviews');
        this.route('search');
    });
    this.route('descriptions');
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
        this.route('profile');
        this.route('search');
    });
    this.route('tracks', function () {
        this.route('profile', { path: '/' });
    });
});

export default Router;
