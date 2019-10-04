const userResolver = require("./resolvers/user");
const blogPostResolver = require("./resolvers/blogPost");

module.exports = {
  ...userResolver,
  ...blogPostResolver
};
