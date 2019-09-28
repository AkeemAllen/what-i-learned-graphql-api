const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();
const server = http.createServer(app);

mongoose.connect(
  "mongodb+srv://Akeem:akstar4321@testcluster1-pbgw6.mongodb.net/test?retryWrites=true&w=majority"
);

mongoose.Promise = Promise;

var schema = buildSchema(`
  type Query {
    message: String
  }
`);

var root = {
  message: () => "Hello"
};

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use(
  "/graphql",
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

setImmediate(() => {
  server.listen(8081, () => {
    console.log("Listening on port 8081");
  });
});

// export default app;
