import EchonestAdapter from './echonest';

export default EchonestAdapter.extend({
    pathForType() {
        return 'artist';
    },

    buildURL() {
        let url = this._super.apply(this, arguments);

        // If the `genre` method is passed, refactor the url to point to the correct API
        return url.replace('artist/genre', 'genre/artists');
    }
});
