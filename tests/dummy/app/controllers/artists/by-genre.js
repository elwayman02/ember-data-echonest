import KeywordSearchController from '../keyword-search';

export default KeywordSearchController.extend({
    modelKey: 'artist',
    query: {
        method: 'genre'
    }
});
