const fetch = require("node-fetch");

const { app, baseURL, author } = require("../constants");

app.get("/api/items/:id", async (req, response) => {
  const { id } = req.params;
  const urls = [`${baseURL}items/${id}`, `${baseURL}items/${id}/description`];

  const requests = urls.map((url) => fetch(url).then((res) => res.json()));
  const [product, { plain_text }] = await Promise.all(requests);

  const item = {
    author,
    item: {
      id: product.id,
      title: product.title,
      price: { currency: product.currency_id, amount: product.price },
      picture: product.thumbnail,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping,
      sold_quantity: product.sold_quantity,
      description: plain_text,
    },
  };

  response.header("Access-Control-Allow-Origin", "*");
  response.json(item);
});

module.exports = app;
