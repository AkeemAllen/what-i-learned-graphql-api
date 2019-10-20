exports.Comment = `
    type Comment{
        id: ID!
        body: String!
        postSlug: String!
    }
`;

exports.CommentInputData = `
    input CommentInputData {
        body: String!
        postSlug: String!
    }
`;
exports.CommentQueries = `
    getCommentByPost(postSlug:String!):[Comment!]!
`;

exports.CommentMutations = `
    addComment(input:CommentInputData): Comment!
`;
