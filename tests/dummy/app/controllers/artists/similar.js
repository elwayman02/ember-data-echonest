import KeywordSearchController from '../keyword-search';

export default KeywordSearchController.extend({
    modelKey: 'artist',
    query: {
        method: 'similar',
        min_hotttnesss: 0.5,
        min_results: 15,
        results: 100
    }
});
