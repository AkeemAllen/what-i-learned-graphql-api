const Comment = require("../../models/Comment");

module.exports = {
  addComment: async ({ input }) => {
    const comment = new Comment({
      body: input.body,
      postSlug: input.postSlug,
      writer: "5d9624e042daba4518812390"
    });
    let createdComment;
    return await comment.save();
  },
  getCommentByPost: async ({ postSlug }, req) => {
    return await Comment.find({ postSlug: postSlug });
  }
};
