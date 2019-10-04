exports.User = `
    type User {
        id: ID!
        email: String!
        name: String!
        password: String
    }
`;

exports.UserInputData = `
    input UserInputData {
        email: String!
        name: String!
        password: String
    }
`;

exports.AuthData = `
    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }
`;

exports.UserQueries = `
    allUsers: [User!]!
    getUserByEmail(email:String!): User!
    getUserById(id: ID!): User!
    login(email:String!,password:String!): AuthData!
`;

exports.UserMutations = `
    createUser(userInput:UserInputData!): User!
`;
