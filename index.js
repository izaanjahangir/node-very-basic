const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World from izaan");
});

app.use((req, res) => {
  res.send("Not found");
});

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
