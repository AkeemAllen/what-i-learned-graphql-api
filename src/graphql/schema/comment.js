exports.Comment = `
    type Comment{
        id: ID!
        body: String!
        postSlug: String!
        writer: String!
        date: String!
    }
`;

exports.CommentInputData = `
    input CommentInputData {
        body: String!
        postSlug: String!
        writer: String
        date: String
    }
`;

exports.CommentQueries = `
    allComments(sort: Sorting):[Comment!]!
    getCommentByPost(postSlug:String!,sort:Sorting):[Comment!]!
`;

exports.CommentMutations = `
    addComment(input:CommentInputData): Comment!
`;
