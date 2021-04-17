const { Router } = require("express");
const app = new Router();
const baseURL = "https://api.mercadolibre.com/";
const author = { name: "Daniel", lastName: "Moreno" };

module.exports.app = app;
module.exports.baseURL = baseURL;
module.exports.author = author;