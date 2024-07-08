const express = require("express");
const app = express();

app.get("/", (req, resp) => {
  resp.send("Welcome to home page");
});

app.get("/users", (req, resp) => {
  resp.send("Welcome to users page");
});

app.listen(5000);
