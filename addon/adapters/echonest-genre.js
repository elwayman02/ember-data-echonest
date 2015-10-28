import EchonestAdapter from 'ember-data-echonest/adapters/echonest';

export default EchonestAdapter.extend({
    pathForType() {
        return 'genre';
    }
});
