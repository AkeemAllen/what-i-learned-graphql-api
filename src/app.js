const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const graphqlHttp = require("express-graphql");
const cors = require("cors");
const firstSchema = require("./schema/schema");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolvers");
require("dotenv/config");

const app = express();
const server = http.createServer(app);

// allows cross-origin requests
app.use(cors());

app.use(bodyParser.json());

// for logging purposes
app.use(morgan("dev"));

// setting headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// connect to mongo database
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    pretty: true,
    customformatError(err) {
      if (!err.originalError) {
        return err;
      }
      const data = err.originalError.data;
      const message = err.message || "An error occured";
      const code = err.originalError.code || 500;
      return { message: message, status: code, data: data };
    }
  })
);

setImmediate(() => {
  server.listen(8081, () => {
    console.log("Listening on port 8081");
  });
});
