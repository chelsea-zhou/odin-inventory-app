const {Pool} = require("pg");


module.exports = new Pool({
    host: "localhost", // or wherever the db is hosted
    user: "chenshuzhou",
    database: "photo_inventory",
    password: "Ulquiorra4!",
    port: 5432 // The default port
  });