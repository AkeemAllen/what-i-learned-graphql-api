const { buildSchema } = require("graphql");

const userSchemas = require("./schema/user");
const blogPostSchemas = require("./schema/blogPost");

module.exports = buildSchema(`
    ${userSchemas.User}
    ${userSchemas.UserInputData}
    ${userSchemas.AuthData}

    ${blogPostSchemas.BlogPost}
    ${blogPostSchemas.BlogPostInputData}

    type RootQuery {
        ${userSchemas.UserQueries}
        ${blogPostSchemas.BlogPostQueries}
    }

    type RootMutation {
        ${userSchemas.UserMutations}
        ${blogPostSchemas.BlogPostMutations}
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
