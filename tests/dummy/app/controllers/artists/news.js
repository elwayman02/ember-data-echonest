import KeywordSearchController from '../keyword-search';

export default KeywordSearchController.extend({
    modelKey: 'news',
    query: {
        high_relevance: true,
        results: 100
    }
});
