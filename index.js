const express = require("express");
const connect = require("./db/db");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to mock 14");
});

app.listen(PORT, async () => {
  await connect();
  console.log(`server started ${PORT}`);
});
