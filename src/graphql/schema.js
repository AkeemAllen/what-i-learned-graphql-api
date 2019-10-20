const { buildSchema } = require("graphql");

const userSchemas = require("./schema/user");
const blogPostSchemas = require("./schema/blogPost");
const contentfulBlogPostSchema = require("./schema/contentfulBlogPost");
const commentSchema = require("./schema/comment");

module.exports = buildSchema(`
    ${userSchemas.User}
    ${userSchemas.UserInputData}
    ${userSchemas.AuthData}

    ${blogPostSchemas.BlogPost}
    ${blogPostSchemas.BlogPostInputData}

    ${contentfulBlogPostSchema.ContentfulBlogPost}
    ${contentfulBlogPostSchema.ContentfulBlogPostInputData}

    ${commentSchema.Comment}
    ${commentSchema.CommentInputData}
    
    type RootQuery {
        ${userSchemas.UserQueries}
        ${blogPostSchemas.BlogPostQueries}
        ${contentfulBlogPostSchema.ContentfulBlogPostQueries}
        ${commentSchema.CommentQueries}
    }
    
    type RootMutation {
        ${userSchemas.UserMutations}
        ${blogPostSchemas.BlogPostMutations}
        ${contentfulBlogPostSchema.ContentfulBlogPostMutations}
        ${commentSchema.CommentMutations}
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
