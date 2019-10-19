exports.BlogPost = `
    type BlogPost {
        id:ID!
        title: String!
        slug: String!
        description:String!
        publishedDate: String!
        body:String!
    }
`;

exports.BlogPostInputData = `
    input BlogPostInputData {
        title: String!
        slug: String!
        description:String!
        publishedDate:String!
        body: String!
    }
`;

exports.BlogPostQueries = `
    allBlogPosts: [BlogPost!]!
    getPostById(id:ID!): BlogPost!
`;

exports.BlogPostMutations = `
    createBlogPost(input:BlogPostInputData): BlogPost!
`;
