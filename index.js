const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(4000, () => {
  console.log("lest on jj port 4000");
});
