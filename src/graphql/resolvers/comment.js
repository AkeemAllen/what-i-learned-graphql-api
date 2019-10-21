const Comment = require("../../models/Comment");
const { dateToString } = require("../helpers/date");

module.exports = {
  addComment: async ({ input }) => {
    const comment = new Comment({
      body: input.body,
      postSlug: input.postSlug,
      writer: input.writer,
      date: dateToString(input.date)
    });
    let createdComment;
    return await comment.save();
  },
  getCommentByPost: async ({ postSlug }, req) => {
    const results = await Comment.find({ postSlug: postSlug });
    return results.map(comment => {
      return {
        ...comment._doc,
        id: comment.id,
        date: dateToString(comment._doc.date)
      };
    });
  },
  allComments: async () => {
    const results = await Comment.find();
    return results.map(comment => {
      return {
        ...comment._doc,
        id: comment.id,
        date: dateToString(comment._doc.date)
      };
    });
  }
};
