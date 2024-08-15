const express = require("express");
const EventEmitter = require("events");
const app = express();
const event = new EventEmitter();

event.on("countAPI", () => {
  console.log("event called");
});
app.get("/", (req, resp) => {
  resp.send("api called");
  event.emit("countAPI");
});

app.get("/search", (req, resp) => {
  resp.send("search api called");
});

app.get("/update", (req, resp) => {
  resp.send("update api called");
});
app.listen(5000);
