const { app, baseURL, author } = require("../constants");
const fetch = require("node-fetch");

app.get("/api/items/:id", async (req, res) => {
  const id = req.params.id;
  const response = await fetch(`${baseURL}items/${id}`);
  const data = await response.json();
  const descriptionPromise = await fetch(`${baseURL}items/${id}/description`);
  const { plain_text: description } = await descriptionPromise.json();

  const product = {
    author,
    item: {
      id: data.id,
      title: data.title,
      price: { currency: data.currency_id, amount: data.price },
      picture: data.thumbnail,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description,
    },
  };

  res.header("Access-Control-Allow-Origin", "*");
  res.json(product);
});

module.exports = app;
