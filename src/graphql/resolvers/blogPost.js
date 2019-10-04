const BlogPost = require("../../models/BlogPost");
const User = require("../../models/User");

module.exports = {
  createBlogPost: async ({ input }) => {
    const blogPost = new BlogPost({
      title: input.title,
      slug: input.slug,
      description: input.description,
      publishedDate: input.publishedDate,
      body: input.body,
      creator: "5d9624e042daba4518812390"
    });
    let createdBlogPost;
    return await blogPost
      .save()
      .then(result => {
        createdBlogPost = { ...result._doc, id: result._id };
        return User.findById("5d9624e042daba4518812390");
      })
      .then(user => {
        user.createdBlogs.push(blogPost);
        return user.save();
      })
      .then(() => {
        return createdBlogPost;
      });
  },
  allBlogPosts: async () => {
    return await BlogPost.find().populate("creator");
  },
  getPostById: async ({ id }, req) => {
    return await BlogPost.findById(id);
  }
};
