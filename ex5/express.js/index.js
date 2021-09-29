const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;
const productData = require("./data.json");

app.use(express.json());
app.use(cors());
app.get("/", function (req, res) {
  res.send("hello world!");
});
app.get("/products", function (req, res) {
  res.json(productData);
});

app.delete("/product/:id", function (req, res) {
  const result = productData.items.findIndex((d) => d.id == req.params.id);
  if (result !== -1) {
    productData.items.splice(result, 1);
  } else {
    console.log("No item found");
  }

  res.setHeader("Content-Type", "text/plain");
  res.json(productData);
});
app.delete("/products", function (req, res) {
  const result = productData.items.findIndex((d) => d.id == req.body.id);
  if (result !== -1) {
    productData.items.splice(result, 1);
  } else {
    console.log("No item found");
  }
  res.send("okayyy");
  res.json(productData);
});
app.post("/products", function (req, res) {
  console.log(req.body);
  productData.items.push({
    id: productData.items.length + 1,
    price: req.params.price,
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    category: req.body.category,
  });
  res.send("ok");
  res.json(productData.items);
  res.setHeader("Content-Type", "text/plain");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
