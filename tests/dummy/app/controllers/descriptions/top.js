import Ember from 'ember';
import computed from 'ember-computed';

const { Controller } = Ember;

export default Controller.extend({
    results: computed.map('model', function (item, index) {
        item.rank = index + 1;
        return item;
    })
});
