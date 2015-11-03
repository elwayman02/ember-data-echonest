import Ember from 'ember';

const { Controller, isPresent } = Ember;

export default Controller.extend({
    blogs: [],
    keyword: '',

    actions: {
        search(name) {
            name = name || this.get('keyword');
            if (isPresent(name)) {
                this.store.query('echonest-blog', {
                    name,
                    method: 'blogs'
                }).then((blogs) => {
                    this.set('blogs', blogs);
                });
            }
        }
    }
});
