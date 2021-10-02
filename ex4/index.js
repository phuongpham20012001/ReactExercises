const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;
const productData = require("./data.json");
const fs = require("fs");

app.use(express.json());
app.use(cors());

app.get("/products", function (req, res) {
  res.json(productData.items);
});

app.get("/invoice/:id", (req, res) => {
  const result = productData.userpurchase.find((ID) => ID.id == req.params.id);

  res.json(result);
});
app.get("/product/:id", (req, res) => {
  const result = productData.items.find((ID) => ID.id == req.params.id);

  res.json(result);
});

app.get("/productsearch/:name", (req, res) => {
  const nameData = req.params.name;
  const result = productData.items.find((name) => name.name === nameData);

  res.json(result);
});
app.get("/productsearchcate/:category", (req, res) => {
  const categoryData = req.params.category;
  const result = productData.items.find(
    (name) => name.category === categoryData
  );

  res.json(result);
});
app.get("/productsearchmanu/:manufacturer", (req, res) => {
  const manufacturerData = req.params.manufacturer;
  const result = productData.items.find(
    (name) => name.manufacturer === manufacturerData
  );

  res.json(result);
});
app.delete("/invoice/:id", function (req, res) {
  const result = productData.userpurchase.findIndex(
    (d) => d.id == req.params.id
  );
  if (result !== -1) {
    productData.userpurchase.splice(result, 1);
  } else {
    console.log("No item found");
  }

  res.send("ok");
});

app.post("/products", function (req, res) {
  productData.items.push({
    id: productData.items.length + 1,
    price: req.body.price,
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    category: req.body.category,
    promos: req.body.promos,
    rating: req.body.rating,
    image: req.body.image,
  });
  res.send("ok");
  res.json(newProduct);
});

app.put("/product/modify/:id", function (req, res) {
  var updateItem = {
    id: req.params.id,
    price: req.body.price,
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    category: req.body.category,
    promos: req.body.promos,
    rating: req.body.rating,
    image: req.body.image,
  };
  for (let i = 0; i < productData.items.length; i++) {
    if (productData.items[i].id == req.params.id) {
      productData.items[req.params.id - 1] = updateItem;
    }
    fs.writeFile(
      "data.json",
      JSON.stringify(productData.items),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
    res.send("Ok");
  }
});

app.post("/user", function (req, res) {
  productData.user.push({
    id: productData.user.length + 1,
    name: req.body.name,
    address: req.body.address,
    phonenumber: req.body.phonenumber,
  });
  res.send("ok");
});
app.post("/invoice", function (req, res) {
  productData.userpurchase.push({
    id: productData.user.length + 1,
    name: req.body.name,
    address: req.body.address,
    phonenumber: req.body.phonenumber,
    price: req.body.price,
    product: req.body.product,
  });
  res.send("ok");
});
app.get("/invoice", function (req, res) {
  res.json(productData.userpurchase);
});
app.get("/user/:id", function (req, res) {
  const result = productData.user.find((ID) => ID.id == req.params.id);

  res.json(result);
});
app.get("/user", function (req, res) {
  res.json(productData.user);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
