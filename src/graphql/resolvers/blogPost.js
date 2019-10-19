const BlogPost = require("../../models/BlogPost");
const User = require("../../models/User");

module.exports = {
  createBlogPost: async ({ input }) => {
    const blogPost = new BlogPost({
      title: input.title,
      slug: input.slug,
      description: input.description,
      publishedDate: input.publishedDate,
      body: input.body
    });
    let createdBlogPost;
    return await blogPost.save().then(result => {
      createdBlogPost = { ...result._doc, id: result._id };
      return createdBlogPost;
    });
  },
  allBlogPosts: async () => {
    return await BlogPost.find();
  },
  getPostById: async ({ id }, req) => {
    return await BlogPost.findById(id);
  }
};
