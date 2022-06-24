const express = require("express");
const app = express();

app.use(express.json());

const Players = require("./persists/hplayer");

app.post("/players", (req, res) => {

})


module.exports = app;