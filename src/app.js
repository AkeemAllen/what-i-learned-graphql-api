const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const express_graphql = require("express-graphql");
const cors = require("cors");
const { buildSchema } = require("graphql");
const schema = require("./schema/schema");
const bodyParser = require("body-parser");
const morgan = require("morgan");
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
  express_graphql({
    schema: schema,
    graphiql: true,
    pretty: true
  })
);

setImmediate(() => {
  server.listen(8081, () => {
    console.log("Listening on port 8081");
  });
});

// export default app;
