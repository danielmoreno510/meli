const express = require('express');
const app = express();
const {products, product} = require('./routes')

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(products, product);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});