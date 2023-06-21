// Expres server running on port 3000

const express = require("express");
const app = express();
app.use(express.json());

const datas = [];

app.get("/", (req, res) => {
  return res.json(datas);
});

app.post("/", (req, res) => {
  const data = req.body;
  datas.push(data?.data || "<No data>");
  return res.json(data);
});

startServer = async () => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
};

startServer();
