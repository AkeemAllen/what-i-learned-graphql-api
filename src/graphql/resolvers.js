const userResolver = require("./resolvers/user");
const blogPostResolver = require("./resolvers/blogPost");
const commentResolver = require("./resolvers/comment");

module.exports = {
  ...userResolver,
  ...blogPostResolver,
  ...commentResolver
};
