const express = require("express");
const app = express();
const PORT = 3000; // would normally have the port configurable
const cors = require('cors')

app.use(cors())

const { getOrders } = require("./src/controllers/ordersController");

app.get("/orders", async (req, res, next) => {
  res.status(200).json(await getOrders());
  next();
});

app.listen(PORT, () => {
  console.log(`backend app listening at http://localhost:${PORT}`);
});
