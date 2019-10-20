const ContentfulBlogPost = require("../../models/ContentfulBlogPost");
const Comment = require("../../models/Comment");

module.exports = {
  addContenfulBlogPost: async ({ input }) => {
    const post = new ContentfulBlogPost({
      title: input.title,
      slug: input.slug,
      description: input.description,
      publishedDate: input.publishedDate
    });
    let createdPost;
    return await post.save().then(result => {
      createdPost = { ...result._doc, id: result._id };
      return createdPost;
    });
  },
  allContentfulBlogPosts: async () => {
    return await ContentfulBlogPost.find();
  },
  getContentfulBlogPostById: async ({ id }, req) => {
    return await ContentfulBlogPost.findById(id);
  }
};
