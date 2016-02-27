import Ember from 'ember';

const { Controller, isPresent } = Ember;

export default Controller.extend({
    biographies: [],
    keyword: '',

    actions: {
        search(name) {
            name = name || this.get('keyword');
            if (isPresent(name)) {
                this.store.query('echonest-biography', { name }).then((biographies) => {
                    this.set('biographies', biographies);
                });
            }
        }
    }
});
