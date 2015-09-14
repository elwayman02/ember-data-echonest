import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function () {
    this.route('index', { path: '/' });
    this.route('genres', function () {
        this.route('list');
        this.route('profile');
        this.route('search');
        this.route('similar');
    });
    this.route('songs', function () {
        this.route('profile');
        this.route('search');
    });
    this.route('tracks', function () {
        this.route('profile', { path: '/' });
    this.route('artists', function() {
        this.route('biographies');
        this.route('blogs');
        this.route('familiarity');
    });
});

export default Router;
