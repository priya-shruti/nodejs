const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("<h1>Hello, this is home page</h1>");
});

app.get("/about", (req, res) => {
  res.send(`<input type="text" placeholder="User name" />
    <button>Click Me </button>`);
});

app.get("/help", (req, res) => {
  res.send({
    name: "anil",
    email: "aniltest@gmail.com",
  });
});
app.listen(5000);
