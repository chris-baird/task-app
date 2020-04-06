const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;
const knex = require('./config/db');

// if (process.env.NODE_ENV === "production") {
app.use(express.static('CLIENT/dist'));
// }

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);
// app.use('/', htmlRogit utes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
