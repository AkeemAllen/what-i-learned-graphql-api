const userSchema = require("../schema/user");

exports.Comment = `
    type Comment{
        id: ID!
        body: String!
        postSlug: String!
        writer: User!
    }
`;

userSchema.User;

exports.CommentInputData = `
    input CommentInputData {
        body: String!
        postSlug: String!
    }
`;
exports.CommentQueries = `
    allComments:[Comment!]!
    getCommentByPost(postSlug:String!):[Comment!]!
`;

exports.CommentMutations = `
    addComment(input:CommentInputData): Comment!
`;
