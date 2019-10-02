exports.User = `
    type User {
        id: ID!
        email: String!
        name: String!
        password: String!
    }
`;

exports.UserInputData = `
    input UserInputData [
        email: String!
        name: String!
        password: String!
    ]
`;

exports.UserQueries = `
    allUsers(email:String!): [User!]!
`;

exports.UserMutations = `
    createUser(userInput:UserInputData!): User!
`;
