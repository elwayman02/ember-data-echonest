import KeywordSearchController from '../keyword-search';

export default KeywordSearchController.extend({
    modelKey: 'song',
    query: {
        method: 'artist',
        results: 100
    }
});
