import KeywordSearchController from '../keyword-search';

export default KeywordSearchController.extend({
    modelKey: 'video',
    query: {
        results: 50
    }
});
