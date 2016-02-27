import KeywordSearchController from '../keyword-search';

export default KeywordSearchController.extend({
    modelKey: 'review',
    query: {
        results: 100
    }
});
