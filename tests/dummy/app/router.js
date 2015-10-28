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
        this.route('search', { path: '/' });
    });
});

export default Router;
