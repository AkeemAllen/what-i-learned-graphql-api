exports.ContentfulBlogPost = `
    type ContentfulBlogPost {
        id:ID!
        title: String!
        slug: String!
        description:String!
        publishedDate: String!
    }
`;

exports.ContentfulBlogPostInputData = `
    input ContentfulBlogPostInputData {
        title: String!
        slug: String!
        description:String!
        publishedDate:String!
    }
`;

exports.ContentfulBlogPostQueries = `
    allContentfulBlogPosts: [ContentfulBlogPost!]!
    getContentfulPostById(id:ID!): ContentfulBlogPost!
`;

exports.ContentfulBlogPostMutations = `
    addContentfulBlogPost(input:ContentfulBlogPostInputData): ContentfulBlogPost!
`;
