const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  postSlug: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: new Date().toString()
  },
  writer: {
    type: String,
    required: false,
    default: "Anonymous"
  }
});

module.exports = mongoose.model("Comment", commentSchema);
