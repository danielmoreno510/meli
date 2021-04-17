const { app, baseURL, author } = require("../constants");
const { map } = require("underscore");
const querystring = require("querystring");
const fetch = require("node-fetch");

app.get("/api/items", async (req, res) => {
  const { q } = querystring.parse(req._parsedUrl.query);
  const response = await fetch(`${baseURL}sites/MLA/search?q=${q}&limit=4`);
  const { results, filters } = await response.json();

  const values = map(filters, "values");
  const categories = map(values, (value) => value[0].name);
  const items = map(results, (item) => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.installments.currency_id,
      amount: item.price,
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shopping: item.shipping.free_shipping,
    city_name: item.address.city_name,
  }));
  const products = { author, categories, items };

  res.header("Access-Control-Allow-Origin", "*");
  res.json(products);
});

module.exports = app;
