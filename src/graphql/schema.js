const { buildSchema } = require("graphql");

const userSchemas = require("./schema/user");

module.exports = buildSchema(`
    ${userSchemas.User}
    ${userSchemas.UserInputData}

    type RootQuery {
        ${userSchemas.UserQueries}
    }

    type RootMutation {
        ${userSchemas.UserMutations}
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
