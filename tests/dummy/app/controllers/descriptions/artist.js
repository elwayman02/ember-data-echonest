import KeywordSearchController from '../keyword-search';

export default KeywordSearchController.extend({
    modelKey: 'description',
    query: {
        method: 'artist'
    }
});
