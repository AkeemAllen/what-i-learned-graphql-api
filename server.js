const express = require("express");
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");

var schema = buildSchema(`
    type Query {
        message: String
    }
`);

var root = {
  message: () => "Hello World"
};

var app = express();

app.use(
  "/graphql",
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.get("/hello", () => {
  console.log("Working");
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
