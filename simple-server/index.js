const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  const query = req.query;
  console.log({ query });

  res.send(
    `<form method='get'>
    <input type='file' name='name'><button>submit</button></form>`
  );
});
app.post("/", (req, res) => {
  const body = req.body;
  console.log({ body });
  res.send("<h1>hello</h1>");
});

app.listen(5000, () => {
  console.log("Server is running on port 3000");
});
