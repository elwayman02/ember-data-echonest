import DS from 'ember-data';

const { RESTSerializer } = DS;

export default RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.response && payload.response.blogs) {
      const blogs = payload.response.blogs.map((blog, index) => {
        blog.artist = blog.id;
        blog.id = index;

        blog.dateFound = blog.date_found;
        blog.datePosted = blog.date_posted;
        delete blog.date_found;
        delete blog.date_posted;

        return blog;
      });

      return this._super(store, primaryModelClass, { 'echonest-blog': blogs }, id, requestType);
    }

    return this._super.apply(this, arguments);
  }
});
