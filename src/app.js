const express = require("express");
const mongoose = require("mongoose");
const http = require("http");

const app = express();
const server = http.createServer(app);

mongoose.connect(
  "mongodb+srv://Akeem:akstar4321@testcluster1-pbgw6.mongodb.net/test?retryWrites=true&w=majority"
);

mongoose.Promise = Promise;

app.get("/", (req, res) => {
  res.send("Hello");
});

setImmediate(() => {
  server.listen(8081, () => {
    console.log("Listening on port 8081");
  });
});

// export default app;
