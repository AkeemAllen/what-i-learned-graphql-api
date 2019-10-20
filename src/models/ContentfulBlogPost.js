const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contentfulblogPostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  publishedDate: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("ContentfulBlogPost", contentfulblogPostSchema);
