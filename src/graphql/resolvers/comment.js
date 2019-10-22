const Comment = require("../../models/Comment");
const { dateToString } = require("../helpers/date");

module.exports = {
  addComment: async ({ input }) => {
    const comment = new Comment({
      body: input.body,
      postSlug: input.postSlug,
      writer: input.writer,
      date: input.date
    });
    const result = await comment.save();
    return {
      ...result._doc,
      id: result.id,
      date: dateToString(result.date)
    };
  },
  getCommentByPost: async ({ postSlug }, { sort }, req) => {
    const results = await Comment.find({ postSlug: postSlug }).sort({
      date: "desc"
    });
    return results.map(comment => {
      return {
        ...comment._doc,
        id: comment.id,
        date: dateToString(comment._doc.date)
      };
    });
  },
  allComments: async ({ sort }) => {
    const results = await Comment.find().sort({
      date: "desc"
    });
    // return results;
    return results.map(comment => {
      return {
        ...comment._doc,
        id: comment.id,
        date: dateToString(comment._doc.date)
      };
    });
  }
};
